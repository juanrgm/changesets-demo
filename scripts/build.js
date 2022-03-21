const { readFileSync, writeFileSync} = require('fs')

const basePath = `${__dirname}/../packages/base/`
const json = JSON.parse(readFileSync(basePath + "/package.json").toString())

delete json.publishConfig;

writeFileSync(basePath + "/lib/package.json", JSON.stringify(json, null, 2))
console.log('Copied')

console.log('#############base')
console.log (readFileSync(basePath + "/package.json").toString())
console.log('#############lib')
console.log (readFileSync(basePath + "/lib/package.json").toString())