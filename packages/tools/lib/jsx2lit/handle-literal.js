module.exports.handleLiteral = function (literal) {
    switch (literal.type) {
        case 'BigIntLiteral':
            return literal.value;
        case 'BooleanLiteral':
            return literal.value;
        case 'DecimalLiteral':
            return literal.value;
        case 'NullLiteral':
            return null;
        case 'NumericLiteral':
            return literal.value;
        case 'RegExpLiteral':
            return literal.pattern;
        case 'StringLiteral':
            return literal.value;
        case 'TemplateLiteral':
            return literal.expressions;
        default:
            return;
    }
}
