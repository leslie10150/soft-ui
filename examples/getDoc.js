const fs = require("fs")
const path = require("path")

const excludes = ["start", "introduce"]

let files = fs
  .readdirSync(path.resolve(__dirname, "./docs/"))
  .map(file => file.split(".")[0])
  .filter(file => excludes.indexOf(file) === -1)

export default files
