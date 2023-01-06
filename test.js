const jsx2Lit = require('./packages/tools/lib/jsx2lit');

const {writeFileSync} = require('fs');

console.time('jsx2lit');
const litCode = jsx2Lit('packages/fiori/src/UploadCollection.template.tsx');
writeFileSync('packages/fiori/dist/generated/templates/UploadCollectionTemplate.lit.js', litCode);
console.timeEnd('jsx2lit');
