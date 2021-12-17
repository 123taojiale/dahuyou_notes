const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./test/a.txt");

fs.readFile(filename, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data); // => abc
});