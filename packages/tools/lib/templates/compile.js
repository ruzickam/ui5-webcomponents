const getopts = require("getopts");
const path = require("path");
const recursiveReadDir = require("recursive-readdir");
const {processors} = require("./processors");

const args = getopts(process.argv.slice(2), {
    alias: {
        o: 'output',
        d: 'directory',
        f: 'file',
        t: 'type'
    },
    default: {
        t: 'lit-html'
    }
});

const onError = (place) => {
    console.log(`A problem occurred when reading ${place}. Please recheck passed parameters.`);
};

const wrapDirectory = (directory, outputDir) => {
    directory = path.normalize(directory);
    outputDir = path.normalize(outputDir);

    return new Promise((resolve, reject) => {
        recursiveReadDir(directory, (err, files) => {
            if (err) {
                onError('directory');
                reject();
            }

            const promises = files.map(fileName => {
                const processor = processors.find(p => p.match(fileName));
                if (processor) {
                    return processor.process(fileName, outputDir);
                }
            }).filter(x => !!x);

            resolve(Promise.all(promises));
        });
    });
};

if (!args['d'] || !args['o']) {
    console.log('Please provide an input and output directory (-d and -o)');
} else {
    wrapDirectory(args['d'], args['o']).then(() => {
        console.log("Templates generated");
    });
}
