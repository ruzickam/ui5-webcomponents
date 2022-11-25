const {readFileSync} = require('fs');
const {transformFromAstSync} = require('@babel/core');
const {default: generator} = require('@babel/generator');
const types = require('@babel/types');
const {default: traverse} = require('@babel/traverse');
const parse = require('./parse');
const controlFlowImportsSource = '@ui5/webcomponents-base/src/jsx/control-flow-elements';
const prepareForTransform = require('./prepare-for-transform');
const replaceWithLitBlock = require('./replace-with-lit-block');
const parseHCallExpression = require("./parse-h-call-expression");

module.exports = (filePath) => {
    const fileContent = readFileSync(filePath, {encoding: 'utf-8'}).replace(/\r\n/g, '\n');
    const parsed = parse(fileContent);
    prepareForTransform(parsed, filePath);

    const reactPresetOptions = {
        filename: filePath,
        runtime: 'automatic',
        importSource: '@ui5/webcomponents-base/src/jsx',
    }
    const {code, map, ast} = transformFromAstSync(parsed, fileContent, {
        filename: filePath,
        presets: [["@babel/preset-typescript", {filename: filePath}], ['@babel/preset-react', reactPresetOptions]],
        ast: true,
        code: false
    });
    traverse(ast, {
        ImportDeclaration: imp => {
            const jsxImport = imp.node.specifiers?.find(i => i.imported.name === 'jsx' || i.imported.name === 'jsxs');
            const fragmentImport = imp.node.specifiers?.find(i => i.imported.name === 'Fragment');
            const controlFlowImport = imp.node.source.value === controlFlowImportsSource;
            if (jsxImport) {
                imp.scope.rename(jsxImport.local.name, 'h');
            }
            if (fragmentImport) {
                imp.scope.rename(fragmentImport.local.name, '"Fragment"');
            }
            if (controlFlowImport) {
                imp.node.specifiers?.forEach(specifier => {
                    const localName = specifier.local?.name || specifier.imported.name;
                    imp.scope.rename(localName, `"${specifier.imported.name}"`);
                });
            }
            imp.remove();
        },
        'CallExpression': call => {
            const functionName = call.node.callee.name;

            if (functionName !== 'h') {
                return;
            }
            if (types.isArrowFunctionExpression(call.container) && !types.isBlockStatement(call.container)) { // () => callee
                call.replaceWith(
                    types.blockStatement(
                        [
                            types.returnStatement(call.node)
                        ]
                    )
                );
                return;
            }
            const hCallExpression = parseHCallExpression(call.node);
            replaceWithLitBlock(call, hCallExpression);
        }
    });
    const {code: c} = generator(ast);

    return c;
};
