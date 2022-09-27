const path = require('path');
const Common = require('./Common');

const files = Common.readFilesSync('./src/template/');

function genRouter() {
  const routers = [];
  for(let i = 0; i < files.length; i++) {
    const file = files[i];
    const extname = path.extname(file);
    const fileName = path.basename(file, extname);
    routers.push({
      path: file,
      name: fileName,
      key: fileName
    })
  }

  return routers;
}

const routers = genRouter(files);

module.exports = routers;