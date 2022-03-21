const {copyFileSync} = require('fs')

const basePath = `${__dirname}/../packages/base/`
copyFileSync(basePath + "/package.json", basePath + "/lib/package.json");
console.log('Copied')