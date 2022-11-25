const types = require("@babel/types");
const {parse} = require("@babel/parser");

const isExpression = (val) => {
    try {
        return val.startsWith('{') && val.endsWith('}');
    } catch (e) {
        debugger;
    }
};

const coerceExpression = v => isExpression(v) ? v.substring(1, v.length - 1) : v;

const bindingValue = (value) => {
    if (isExpression(value)) {
        return `$${value}`;
    }
    return `"${value}"`;
}

const getBindings = (bindings) => {
    return Object.keys(bindings).map((key) => {
        const value = bindings[key];
        if (key === 'class') {
            return `class=${bindingValue(isExpression(value) ? `{classMap(${coerceExpression(value)})}` : value)}`;
        }
        if (key === 'style') {
            return `style=${bindingValue(isExpression(value) ? `{styleMap(${coerceExpression(value)})}` : value)}`;
        }
        return `${key}=${bindingValue(value)}`;
    }, []).join(' ');
}

function getIdentifierValue(hCall, block) {
    if (typeof hCall === 'string') {
        return isExpression(hCall) ? `$${hCall}` : hCall;
    }
    const {tag, bindings, children} = hCall;
    const childrenValue = children.map(c => {
        if (typeof c === 'object') {
            return "${" + hCallToIdentifier(c, block) + "}";
        }
        if (isExpression(c)) {
            return "$" + c;
        }
        return c;
    });
    if (tag === 'Fragment') {
        return `html\`${childrenValue.join('')}\``;
    }
    if (tag === 'For') {
        return `repeat(${coerceExpression(bindings.each)}, ${coerceExpression(bindings.keyFn)}, ${coerceExpression(hCall.children[0])})`;
    }
    if (tag === 'Show') {
        return `(${coerceExpression(bindings.when)}) ? html\`${childrenValue.join('')}\` : ''`;
    }
    const result = [`html\`<${tag} ${getBindings(bindings)}>`];
    if (childrenValue) {
        result.push(childrenValue.join(''));
    }
    result.push(`</${tag}>\``);
    return result.join('');
}

function hCallToIdentifier(hCall, block) {
    const identifier = block.scope.generateUidIdentifier("el");
    let value;
    if (typeof hCall === 'string') {
        value = getIdentifierValue(hCall, block);
    } else {
        if (hCall.tag.startsWith('ui5-')) {
            const scopeTag = '${scopeTag("' + hCall.tag + '", tags, suffix)}';
            value = `suffix ? ${getIdentifierValue({
                ...hCall,
                tag: scopeTag
            }, block)} : ${getIdentifierValue(hCall, block)}`;
        } else {
            value = getIdentifierValue(hCall, block);
        }
    }
    block.state.hCallIdentifiers.push({
        identifier,
        value
    });
    return identifier.name;
}

module.exports = (path, hCall) => {
    const block = path.find(p => types.isBlockStatement(p));
    block.state = block.state || {};
    block.state.hCallIdentifiers = [];
    const x = hCallToIdentifier(hCall, block);
    const result = block.state.hCallIdentifiers.map(({identifier, value}) => {
        return `const ${identifier.name} = ${value};`;
    }).join('\n');
    const p = parse(result);
    block.insertBefore(p.program.body);
    path.replaceWithSourceString(x);
}
