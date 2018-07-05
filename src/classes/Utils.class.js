class Utils {
    mkDirByPathSync(targetDir, {
        isRelativeToScript = false
    } = {}) {
        const sep = path.sep;
        const initDir = path.isAbsolute(targetDir) ? sep : '';
        const baseDir = isRelativeToScript ? __dirname : '.';

        targetDir.split(sep).reduce((parentDir, childDir) => {
            const curDir = path.resolve(baseDir, parentDir, childDir);
            try {
                fs.mkdirSync(curDir);
                console.log(`Directory ${curDir} created!`);
            } catch (err) {
                if (err.code !== 'EEXIST') {
                    throw err;
                }

                console.log(`Directory ${curDir} already exists!`);
            }

            return curDir;
        }, initDir);
    }

    buildCss() {
        exec('node-sass --include-path sass ./sass/main.sass ./css/build.css', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`Css Build: ${stdout}`);
            fs.readFile('./css/build.css', 'utf8', (err, data) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                let str = data;
                str = str.replace(/\/\*(.|\n)*?\*\//g, "");
                str = str.replace(/\s*(\{|\}|\[|\]|\(|\)|\:|\;|\,)\s*/g, "$1");
                str = str.replace(/#([\da-fA-F])\1([\da-fA-F])\2([\da-fA-F])\3/g, "#$1$2$3");
                str = str.replace(/:[\+\-]?0(rem|em|ec|ex|px|pc|pt|vh|vw|vmin|vmax|%|mm|cm|in)/g, ":0");
                str = str.replace(/\n/g, "");
                str = str.replace(/;\}/g, "}");
                str = str.replace(/^\s+|\s+$/g, "");
                fs.writeFile('./css/build.min.css', str, function(err) {
                    if (err) {
                        console.log(err);
                        throw new Error('./css/build.min.css')
                    }
                    console.log('Css minified: ./css/build.min.css')
                })
            });
        });
    }

    showHelp() {
        console.log('CSSMOD Instruction');
        console.log(`version ${version}`);
        console.log('===================');
        console.log('--release\tbuild sass, css and css minify file');
        console.log('--build \tbuild only sass file');
        console.log('--buildCss\tbuild css and css minify files. (work only after ./css --build)');
        console.log('--size --sass\tshow size of sass files');
        console.log('--size --css\tshow size of css file');
        console.log('--size --js\tshow size of cssmod utility');
        console.log('===================');
    }
}