const jsx2Lit = require('./packages/tools/lib/jsx2lit');

const {writeFileSync} = require('fs');

console.time('jsx2lit');
const litCode = jsx2Lit('packages/fiori/src/UploadCollection/UploadCollection.tsx');
writeFileSync('packages/fiori/src/UploadCollection/UploadCollectionTemplate.lit.js', litCode);
console.timeEnd('jsx2lit');
