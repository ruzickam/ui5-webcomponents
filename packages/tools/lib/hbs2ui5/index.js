const hbs2lit = require('../hbs2lit');
const path = require('path');
const litRenderer = require('./RenderTemplates/LitRenderer');
const {writeRenderers} = require("../templates/write-renderers");

module.exports.isHandlebars = (fileName) => fileName.indexOf('.hbs') !== -1;

module.exports.processFile = async (file, outputDir) => {
	const litCode = await hbs2lit(file);
	const absoluteOutputDir = composeAbsoluteOutputDir(file, outputDir);
	const componentNameMatcher = /(\w+)(\.hbs)/gim;
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



