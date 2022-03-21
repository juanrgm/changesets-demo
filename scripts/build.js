const {copyFileSync, readFileSync} = require('fs')

const basePath = `${__dirname}/../packages/base/`
copyFileSync(basePath + "/package.json", basePath + "/lib/package.json");
console.log('Copied')

console.log('#############base')
console.log (readFileSync(basePath + "/package.json").toString())
console.log('#############lib')
console.log (readFileSync(basePath + "/lib/package.json").toString())