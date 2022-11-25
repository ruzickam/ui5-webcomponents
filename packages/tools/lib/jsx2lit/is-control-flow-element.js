const ControlFlowElements = new Set([
    'Show',
    'For',
]);

module.exports.isControlFlowElement = (name) => {
    return ControlFlowElements.has(name);
}
