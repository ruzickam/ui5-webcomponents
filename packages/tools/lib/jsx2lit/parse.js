const {parse: babelParser} = require("@babel/parser");

module.exports = (fileContent) => {
    return babelParser(fileContent, {
        sourceType: 'module',
        presets: ['@babel/preset-typescript'],
        plugins: ['typescript', 'jsx', 'decorators'],
    });
};
