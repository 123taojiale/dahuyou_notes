const {
  File
} = require("../utils/index");
const path = require('path');

const filename = path.resolve(__dirname, '../testDirectory');

(async () => {
  const fileIns = await File.getFileIns(filename)
  console.log('fileIns => ', fileIns)
  const children = await fileIns.getChildren()
  console.log(children)
})()