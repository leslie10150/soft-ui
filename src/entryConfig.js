const fs = require('fs')
const path = require('path')

let files = fs.readdirSync(path.resolve(__dirname, './packages/'))

module.exports = files.filter((file) => !~file.indexOf('.'))