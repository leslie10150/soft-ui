const fs = require('fs')
const path = require('path')

let files = fs.readdirSync(path.resolve(__dirname, './styles/packages/'))

module.exports = files.map((file) => file.split('.')[0])
