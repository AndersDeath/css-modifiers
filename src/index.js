#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const exec = require('child_process').exec;

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
}

class Main {
    constructor(done) {
        this.utils = new Utils;
        this.createDirectories();
        this.buildModules(() => {
            done();
        });
    }

    createDirectories() {
        this.utils.mkDirByPathSync('./sass/modules');
    }

    buildModules(done) {
        this.widthPercent().then(() => {
            this.widthPixels().then(() => {
                this.floats().then(() => {
                    this.mainFile().then(() => {
                        done();
                    });
                })
            })
        });
    }

    mainFile() {
        let content = '';
        content += '@import "modules/width-percent.sass"\n';
        content += '@import "modules/width-pixels.sass"\n';
        content += '@import "modules/floats.sass"\n';
        return new Promise((resolve, reject) => {
            fs.writeFile('./sass/main.sass', content, (err) => {
                if (err) throw err;
                console.log(`Main file created!`)
                resolve(true);
            });
        });
    }

    widthPercent() {
        let content = '';
        for (let i = 1; i <= 100; i++) {
            content += '.mod-w' + i + 'p\n\twidth: ' + i + '%\n';
        }
        return new Promise((resolve, reject) => {
            fs.writeFile('./sass/modules/width-percent.sass', content, (err) => {
                if (err) throw err;
                console.log(`Module WidthPercent created!`)
                resolve(true);
            });
        });
    }

    widthPixels() {
        let content = '';
        for (let i = 1; i <= 1280; i++) {
            content += '.mod-w' + i + 'px\n\twidth: ' + i + 'px\n';
        }
        return new Promise((resolve, reject) => {
            fs.writeFile('./sass/modules/width-pixels.sass', content, (err) => {
                if (err) throw err;
                console.log(`Module WidthPixels created!`);
                resolve(true);
            });
        });
    }

    floats() {
        let content = '';
        content += '.mod-fl\n\tfloat: left\n';
        content += '.mod-fr\n\tfloat: right\n';
        return new Promise((resolve, reject) => {
            fs.writeFile('./sass/modules/floats.sass', content, (err) => {
                if (err) throw err;
                console.log(`Module Floats created!`);
                resolve(true);
            });
        });
    }
}

function buildCss() {
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

if (argv.build === true) {
    new Main(() => {
        console.log('All is done');
    });
}

if (argv.release === true) {
    new Main(() => {
        buildCss();
    });
}

if (argv.buildCss === true) {
    buildCss();
}

if (argv.size === true && argv.sass === true) {
    exec('du -h -s sass', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Sass size: ${stdout}`);
    });
}

if (argv.size === true && argv.css === true) {
    exec('du -h -s css', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Css size: ${stdout}`);
    });
}

if (argv.size === true && argv.js === true) {
    exec('du -hs app.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Lib size: ${stdout}`);
    });
}