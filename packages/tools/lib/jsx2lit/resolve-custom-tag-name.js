const {sync} = require("resolve");
const path = require("path");
const {existsSync, readFileSync} = require("fs");
const {default: traverse} = require("@babel/traverse");
const types = require("@babel/types");
const {isControlFlowElement} = require("./is-control-flow-element");
const parse = require('./parse');

const customTagNames = {};

module.exports = (callee, name, imports) => {
    if (customTagNames[name]) {
        return customTagNames[name];
    }
    if (Object.values(customTagNames).includes(name)) {
        return name;
    }
    if (isControlFlowElement(name)) {
        customTagNames[name] = name;
        return name;
    }
    const imp = imports.find((i) => i.imports.some((im) => im.local === name));
    if (!imp) {
        throw new Error(`Could not resolve import for ${name}`);
    }

    const p = sync(imp.path, {
        basedir: path.dirname(callee),
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    });

    if (!existsSync(p)) {
        throw new Error(`Could not resolve ${p} from ${imp.path}`);
    }
    const fc = readFileSync(p, {encoding: 'utf-8'}).replace(/\r\n/g, '\n');
    const parsedDep = parse(fc);
    traverse(parsedDep, {
        ObjectProperty(path) {
            if (
                types.isIdentifier(path.node.key)
                && path.node.key.name === 'tag'
                && types.isStringLiteral(path.node.value)
            ) {
                customTagNames[name] = path.node.value.value;
                console.log('Found tag', name, path.node.value.value);
                path.stop();
            }
        }
    });

    return customTagNames[name];
};
