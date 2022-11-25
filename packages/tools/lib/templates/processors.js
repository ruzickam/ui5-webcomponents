const {isHandlebars, processFile: processHbsFile} = require("../hbs2ui5");
const {isJsx, processFile: processJsxFile} = require("../jsx2ui5");

module.exports.processors = [
    {
        name: 'hbs',
        process: processHbsFile,
        match: isHandlebars
    },
    {
        name: 'jsx',
        process: processJsxFile,
        match: isJsx
    }
]
