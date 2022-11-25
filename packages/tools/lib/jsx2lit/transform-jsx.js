const types = require('@babel/types');
const generate = require("@babel/generator");
const {kebabCase, camelCase} = require('lodash');
const {handleLiteral} = require('./handle-literal');
const {} = require('typescript');

const createJsxElement = ({tagName, attributes, children}) => types.jsxElement(
    types.jsxOpeningElement(
        types.jsxIdentifier(tagName),
        attributes.map(({name, value}) => types.jsxAttribute(
                types.jsxIdentifier(name),
                typeof value === 'string' ? types.stringLiteral(value) : value
            )
        )
    ),
    types.jsxClosingElement(
        types.jsxIdentifier(tagName),
    ),
    children,
    false
);

function newComponentChildNode(name) {
    return {
        type: 'component',
        name,
        children: [],
        bindings: [],
        // metadata: getContent(name), // this should be a function which returns the typings of the component
        metadata: {}
    }
}

function newAttributeChildNode(attrName, value = undefined) {
    let type = 'attribute';
    let name = attrName;
    const attrIsOutput = !!attrName.match(/^on[A-Z]/);
    const attrIsSlot = !!attrName.match(/^slot[A-Z]/);
    if (attrIsOutput) {
        type = 'output';
        name = kebabCase(attrName.replace(/^on/, ''));
    }
    if (attrIsSlot) {
        type = 'slot';
        name = camelCase(attrName.replace(/^slot/, ''));
    }
    return {
        type,
        name,
        value,
        children: [],
    }
}

function newExpressionChildNode() {
    return {
        type: 'expression',
        name: '-expression-',
        source: '',
        children: [],
    }
}

module.exports = function (functionDeclarationPath, {syntaxError, fileContents, nodeContent}) {
    let jsxContent = undefined;
    functionDeclarationPath.traverse({
        JSXSpreadAttribute: (path) => {
            throw syntaxError(path.node, `Spread attributes are not supported in JSX templates.`);
        },
        JSXSpreadChild: (path) => {
            throw syntaxError(path.node, `JSX Spread children is not supported in JSX templates.`);
        },
        JSXAttribute: (path) => {
            if (!types.isJSXIdentifier(path.node.name)) {
                throw syntaxError(path.node.name, `JSX Attribute name must be an identifier.`);
            }
            const tagNodeState = path.parentPath.state;
            const tagNode = path.parentPath.parent;

            const attrIdentifier = path.node.name;
            const value = path.node.value;
            const attributeChildNode = newAttributeChildNode(attrIdentifier.name, tagNodeState.metadata);
            if (attributeChildNode.type !== 'slot') {
                path.state = attributeChildNode;
                if (!value) {
                    path.state.value = true;
                }
                if (types.isLiteral(value)) {
                    path.state.value = handleLiteral(value);
                }
                tagNodeState.bindings.push(path.state);
            } else {
                path.remove();
                tagNode.children.push(
                    createJsxElement({
                        tagName: 'slot',
                        attributes: [
                            {
                                name: 'slot',
                                value: attributeChildNode.name
                            },
                        ],
                        children: [value]
                    })
                );
            }
        },
        JSXText: (path) => {
            const parentNode = path.parentPath.state;
            const textContent = path.node.value.trim().replace(/(\\r|\\n)/g, '');
            if (textContent.length > 0) {
                path.state = {
                    text: path.node.value
                }
                if (parentNode) {
                    parentNode.children.push(path.state);
                }
            }
            path.remove();
        },
        JSXExpressionContainer: (path) => {
            const {expression} = path.node;
            if (types.isMemberExpression(expression) && expression.object.name === 'props') {
                if (expression.property.name.match(/^slot/)) {
                    path.insertAfter(
                        createJsxElement({
                            tagName: 'slot',
                            attributes: [{
                                name: 'slot',
                                value: camelCase(expression.property.name.replace(/^slot/, ''))
                            }],
                            children: []
                        })
                    );
                    path.remove();
                    return;
                }
                if (expression.property.name === 'children') {
                    path.insertBefore(
                        createJsxElement({tagName: 'slot', attributes: [], children: []})
                    );
                    path.remove();
                    return;
                }
            }
            const getSource = () => {
                let source = nodeContent(expression);
                path.traverse({
                    MemberExpression: (memberExpression) => {
                        const parsed = {
                            original: memberExpression.node.object.name,
                            replacement: 'context'
                        };
                        if (parsed) {
                            source = source.replace(parsed.original, parsed.replacement);
                        }
                    }
                });
                return source;
            };
            const parentNode = path.parentPath.state;
            path.state = newExpressionChildNode();

            if (types.isArrowFunctionExpression(expression)) {
                const {body, params} = expression;

                if (parentNode.type === 'component' && parentNode.name === 'For') {
                    if (types.isBlockStatement(body)) {
                        if (body.body.length > 1 || !types.isReturnStatement(body.body[0])) {
                            throw syntaxError(body, `For loop callback must have one statement and it must be a return statement.`);
                        }
                        const returnArgument = body.body[0].argument;
                        if (!returnArgument || (!types.isJSXElement(returnArgument) && !types.isJSXFragment(returnArgument))) {
                            throw syntaxError(returnArgument || body, `For loop callback must return a JSX Element or Fragment`);
                        }
                        path.insertAfter(body.body[0].argument);
                    } else {
                        if (!body || (!types.isJSXElement(body) && !types.isJSXFragment(body))) {
                            throw syntaxError(body, `For loop callback must return a JSX Element or Fragment`);
                        }
                        path.insertAfter(body);
                    }
                    params.forEach((param, index) => {
                        if (!types.isIdentifier(param)) {
                            throw syntaxError(param, `For loop callback must have only identifiers as parameters, found: ${param.type}`);
                        }
                        parentNode.context = parentNode.context || {};
                        parentNode.context[index === 0 ? 'item' : 'index'] = param.name;
                    });
                    path.remove();
                    return;
                }
                if (parentNode.type === 'output') {
                    throw syntaxError(path.node.expression, 'You should not declare functions in JSX, use functions declared in the component class instead.');
                }
            }

            path.state.source = getSource();
            if (parentNode.type === 'attribute') {
                parentNode.value = path.state.source;
                return;
            }
            parentNode.children.push(path.state);
        },
        JSXFragment: (path) => {
            const name = '-fragment-';
            path.state = newComponentChildNode(name);
            if (!jsxContent) {
                jsxContent = path.state;
            }
            const parentScope = path.parentPath.state;
            if (parentScope) {
                parentScope.children.push(path.state);
            }
        },
        JSXElement: (path) => {
            if (!types.isJSXIdentifier(path.node.openingElement.name)) {
                throw syntaxError(path.node.openingElement.name, `JSX element opening must be a JSXIdentifier`);
            }
            const openingElement = path.node.openingElement;
            const tag = openingElement.name;
            const name = tag.name;
            path.state = newComponentChildNode(name);
            if (!jsxContent) {
                jsxContent = path.state;
            }
            const parentScope = path.parentPath.state;
            if (parentScope) {
                parentScope.children.push(path.state);
            }
        },
    });
    console.log(jsxContent);
    return jsxContent;
}
