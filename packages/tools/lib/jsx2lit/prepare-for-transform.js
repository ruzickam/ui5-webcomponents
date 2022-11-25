const {default: traverse} = require("@babel/traverse");
const types = require("@babel/types");
const {default: generator} = require("@babel/generator");
const {isHtmlElement} = require("./is-html-element");
const resolveCustomTagName = require("./resolve-custom-tag-name");
const {kebabCase, camelCase} = require("lodash");

module.exports = (ast, filePath) => {
    const imports = [];

    traverse(ast, {
        ImportDeclaration: function (p) {
            const node = p.node;
            const imp = {
                imports: [],
                path: node.source.value,
            }
            node.specifiers.forEach((specifier) => {
                if (types.isImportDefaultSpecifier(specifier)) {
                    imp.imports.push({
                        imported: "default",
                        local: specifier.local.name,
                    });
                }
                if (types.isImportSpecifier(specifier)) {
                    imp.imports.push({
                        imported: (() => {
                            if (types.isIdentifier(specifier.imported)) {
                                return specifier.imported?.name;
                            }
                            return specifier.imported.value;
                        })(),
                        local: specifier.local.name,
                    })
                }
                if (types.isImportNamespaceSpecifier(specifier)) {
                    imp.imports.push({
                        imported: '*',
                        local: specifier.local.name,
                    });
                }
            });
            imports.push(imp);
        },
        ExportDefaultDeclaration: function (defaultExportPath) {
            defaultExportPath.state = {};
            let functionDeclarationPath;
            defaultExportPath.traverse({
                'FunctionDeclaration|ArrowFunctionExpression': function (path) {
                    if (functionDeclarationPath) {
                        return;
                    }
                    functionDeclarationPath = path;
                    if (defaultExportPath.state.modified) {
                        return;
                    }
                    path.node.params = [
                        types.identifier('context'),
                        types.identifier('tags'),
                        types.identifier('suffix')
                    ];
                    defaultExportPath.state.modified = true;
                }
            });
            defaultExportPath.replaceWith(
                types.functionDeclaration(
                    types.identifier('block0'),
                    functionDeclarationPath.node.params,
                    functionDeclarationPath.node.body
                )
            )
        },
        JSXExpressionContainer: function (path) {
            const expression = path.node.expression;
            if (types.isMemberExpression(expression)) {
                if (expression.object.name === 'props') {
                    if (expression.property.name === 'children') {
                        path.replaceWith(
                            types.jsxElement(
                                types.jsxOpeningElement(
                                    types.jsxIdentifier('slot'),
                                    [],
                                    true
                                ),
                                types.jsxClosingElement(
                                    types.jsxIdentifier('slot')
                                ),
                                []
                            )
                        );
                        return;
                    } else if (expression.property.name.match(/^slot/)) {
                        path.replaceWith(
                            types.jsxElement(
                                types.jsxOpeningElement(
                                    types.jsxIdentifier('slot'),
                                    [
                                        types.jsxAttribute(
                                            types.jsxIdentifier('name'),
                                            types.stringLiteral(camelCase(expression.property.name.replace(/^slot/, '')))
                                        )
                                    ],
                                    true
                                ),
                                types.jsxClosingElement(
                                    types.jsxIdentifier('slot')
                                ),
                                []
                            )
                        );
                        return;
                    }
                    expression.object.name = 'context';
                }
            }
            if (types.isArrowFunctionExpression(expression)) {
                const closestBlock = path.find(p => types.isBlockStatement(p));
                const identifier = closestBlock.scope.generateUidIdentifier('expr');
                closestBlock.insertBefore(
                    types.variableDeclaration(
                        'const',
                        [
                            types.variableDeclarator(
                                identifier,
                                expression
                            )
                        ]
                    )
                );
                path.node.expression = identifier;
                return;
            }
            if (!types.isLiteral(expression)) {
                const expr = generator(expression);
                path.node.expression = types.stringLiteral(`{${expr.code}}`);
            }
        },
        JSXAttribute: function (path) {
            const name = path.node.name.name;
            if (name === 'className') {
                path.node.name.name = 'class';
            } else if (name.match(/^slot[A-Z]/)) {
                const jsxElement = path.find((p) => p.isJSXElement());
                jsxElement.node.children.push(
                    types.jsxElement(
                        types.jsxOpeningElement(
                            types.jsxIdentifier('slot'),
                            [
                                types.jsxAttribute(
                                    types.jsxIdentifier('slot'),
                                    types.stringLiteral(camelCase(name.replace(/^slot/, '')))
                                )
                            ],
                            true
                        ),
                        types.jsxClosingElement(
                            types.jsxIdentifier('slot')
                        ),
                        [((val) => {
                            if (types.isJSXExpressionContainer(val)) {
                                return val;
                            }
                            console.log({path});
                            return val;
                        })(path.node.value)]
                    )
                );
                path.remove();
            } else if (name.match(/^on[A-Z]/)) {
                const newEventName = name.match(/^onUi5[A-Z]/) ? 'ui5-' + kebabCase(name.replace(/^onUi5/, '')) : name.replace(/^on/, '');
                path.node.name.name = '@' + newEventName.toLowerCase();
            }
        },
        JSXOpeningElement(jsxOpeningElement) {
            const tagName = jsxOpeningElement.node.name.name;
            const isHTMLElement = isHtmlElement(tagName);
            if (!isHTMLElement) {
                const resolvedTagName = resolveCustomTagName(filePath, tagName, imports);
                if (resolvedTagName !== tagName) {
                    jsxOpeningElement.replaceWith(
                        types.jsxOpeningElement(
                            types.jsxIdentifier(resolvedTagName),
                            jsxOpeningElement.node.attributes,
                            jsxOpeningElement.node.selfClosing,
                        )
                    )
                }
            }
        },
        JSXClosingElement(jsxClosingElement) {
            const tagName = jsxClosingElement.node.name.name;
            const isHTMLElement = isHtmlElement(tagName);
            if (!isHTMLElement) {
                const resolvedTagName = resolveCustomTagName(filePath, tagName, imports);
                if (resolvedTagName !== tagName) {
                    jsxClosingElement.replaceWith(
                        types.jsxClosingElement(
                            types.jsxIdentifier(resolvedTagName)
                        )
                    )
                }
            }
        }
    });
}
