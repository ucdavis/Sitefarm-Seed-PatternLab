const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let filelist = [];

  files.forEach(file => {
    const absfile = path.join(dir, file);
    if (fs.statSync(absfile).isDirectory()) {
      // var theseFiles = walkDir(absfile).map(subfile => path.join(file, subfile))
      filelist = filelist.concat(walkDir(absfile));
    }
    else {
      filelist.push(absfile);
    }
  });

  return filelist;
}

module.exports = walkDir;
