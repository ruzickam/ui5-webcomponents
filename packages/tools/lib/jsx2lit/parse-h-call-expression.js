const types = require("@babel/types");
const {default: generator} = require("@babel/generator");

function ObjectExpression(expression) {
    return expression.properties.reduce((obj, {key, value}) => ({
        ...obj,
        [parseExpr(key)]: parseExpr(value)
    }), {});
}

function ArrayExpression(expression) {
    return expression.elements.map((exp) => parseExpr(exp));
}

function parseExpr(expression) {
    if (types.isCallExpression(expression)) {
        return parseHCallExpression(expression);
    }
    if (types.isObjectExpression(expression)) {
        return ObjectExpression(expression);
    }
    if (types.isArrayExpression(expression)) {
        return ArrayExpression(expression);
    }
    if (types.isLiteral(expression)) {
        return expression.value;
    }
    if (types.isIdentifier(expression)) {
        return expression.name;
    }
}

function parseHCallExpression(expression) {
    if (expression.callee.name === 'h') {
        const [tag, props] = expression.arguments;
        const tagValue = parseExpr(tag);
        const propsValue = parseExpr(props);
        return {
            tag: tagValue.replace(/"/g, ''),
            bindings: Object.keys(propsValue).filter((key) => key !== 'children').reduce((obj, key) => {
                obj[key] = propsValue[key];
                return obj
            }, {}),
            children: ((children) => {
                if (!children) {
                    return [];
                }
                return Array.isArray(children) ? children : [children];
            })(propsValue.children)
        }
    }
    return `{${generator(expression).code}}`;
}

module.exports = parseHCallExpression;
