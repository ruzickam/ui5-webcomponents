const path = require("path");
const {promises: fs} = require("fs");

module.exports.writeRenderers = async (outputDir, controlName, fileContent) => {
    try {

        await fs.mkdir(outputDir, { recursive: true });

        const compiledFilePath = `${outputDir}${path.sep}${controlName}Template.lit.js`;

        // strip DOS line endings because the break the source maps
        let fileContentUnix = fileContent.replace(/\r\n/g, "\n");
        fileContentUnix = fileContentUnix.replace(/\r/g, "\n");

        // Only write to the file system actual changes - each updated file, no matter if the same or not, triggers an expensive operation for rollup
        // Note: .hbs files that include a changed .hbs file will also be recompiled as their content will be updated too

        let existingFileContent = "";
        try {
            existingFileContent = await fs.readFile(compiledFilePath);
        } catch (e) {}

        if (existingFileContent !== fileContentUnix) {
            return fs.writeFile(compiledFilePath, fileContentUnix);
        }

    } catch (e) {
        console.log(e);
    }
};
