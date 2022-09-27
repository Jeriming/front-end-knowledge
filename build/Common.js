const fs = require('fs');

function readFilesSync(path) {
  const files = fs.readdirSync(path);
  return files;
}

module.exports = {
  readFilesSync
};