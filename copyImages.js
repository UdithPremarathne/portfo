const fse = require('fs-extra');

const srcDir = `./src/images`;
const destDir = `./dist/images`;

// To copy a images
fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("success!");
    }
});