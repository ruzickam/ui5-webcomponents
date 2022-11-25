const jsx2Lit = require("../jsx2Lit");
const {writeRenderers} = require("../templates/write-renderers");
const litRenderer = require("../hbs2ui5/RenderTemplates/LitRenderer");
const path = require("path");

module.exports.isJsx = (file) => file.endsWith('.tsx');

module.exports.processFile = async (file, outputDir) => {
    const litCode = await jsx2Lit(file);
    console.log({litCode});
    const absoluteOutputDir = composeAbsoluteOutputDir(file, outputDir);
    const componentNameMatcher = /(\w+)(Component)?(\.tsx)/gim;
    const componentName = componentNameMatcher.exec(file)[1];

    return writeRenderers(absoluteOutputDir, componentName, litRenderer.generateTemplate(componentName, litCode));
};

const composeAbsoluteOutputDir = (file, outputDir) => {
    // (1) Extract the dir structure from the source file path - "src/lvl1/lvl2/MyCompBadge.hbs"
    // - remove the filename - "src/lvl1/lvl2"
    // - remove the leading dir - "lvl1/lvl2"
    const fileDir = file.split(path.sep).slice(1, -1).join(path.sep);

    // (2) Compose full output dir - "dist/generated/templates/lvl1/lvl2"
    return `${outputDir}${path.sep}${fileDir}`;
};

