const { readFileSync, writeFileSync, mkdirSync, copyFileSync} = require('fs')


for (const name of ['base', 'core']) {
    const basePath = `${__dirname}/../packages/${name}/`

    try { 
        mkdirSync(basePath + "lib")
    } catch(error) {

    }

    const json = JSON.parse(readFileSync(basePath + "/package.json").toString())

    delete json.publishConfig;

    writeFileSync(basePath + "/lib/package.json", JSON.stringify(json, null, 2))
    copyFileSync(basePath + "/index.js", basePath + "/lib/index.js")
    console.log ({
        package: JSON.parse(readFileSync(basePath + "/package.json").toString()),
        packageLib: JSON.parse(readFileSync(basePath + "/lib/package.json").toString())
    })
}