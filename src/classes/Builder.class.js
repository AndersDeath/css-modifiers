
class Builder {
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
                    this.fonts().then(() => {
                        this.mainFile().then(() => {
                            done();
                        });
                    })
                })
            })
        });
    }

    mainFile() {
        let content = '';
        content += '@import "modules/width-percent.sass"\n';
        content += '@import "modules/width-pixels.sass"\n';
        content += '@import "modules/floats.sass"\n';
        content += '@import "modules/fonts.sass"\n';
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

    fonts() {
        let content = '';
        content += '.mod-f-w-bold\n\tfont-weight: bold\n';
        content += '.mod-f-w-bolder\n\tfont-weight: bolder\n';
        content += '.mod-f-w-lighter\n\tfont-weight: lighter\n';
        content += '.mod-f-w-normal\n\tfont-weight: normal\n';
        content += '.mod-f-w-100\n\tfont-weight: 100\n';
        content += '.mod-f-w-200\n\tfont-weight: 200\n';
        content += '.mod-f-w-300\n\tfont-weight: 300\n';
        content += '.mod-f-w-400\n\tfont-weight: 400\n';
        content += '.mod-f-w-500\n\tfont-weight: 500\n';
        content += '.mod-f-w-700\n\tfont-weight: 600\n';
        content += '.mod-f-w-800\n\tfont-weight: 800\n';
        content += '.mod-f-w-900\n\tfont-weight: 900\n';
        content += '.mod-f-v-normal\n\tfont-variant: normal\n';
        content += '.mod-f-v-small-caps\n\tfont-weight: small-caps\n';
        content += '.mod-f-st-italic\n\tfont-style: italic\n';
        content += '.mod-f-st-oblique\n\tfont-style: oblique\n';

        content += '.mod-f-str-ultra-condensed\n\tfont-stretch: ultra-condensed\n';
        content += '.mod-f-str-extra-condensed\n\tfont-stretch: extra-condensed\n';
        content += '.mod-f-str-condensed\n\tfont-stretch: condensed\n';
        content += '.mod-f-str-semi-condensed\n\tfont-stretch: semi-condensed\n';
        content += '.mod-f-str-normal\n\tfont-stretch: normal\n';
        content += '.mod-f-str-semi-expanded\n\tfont-stretch: semi-expanded\n';
        content += '.mod-f-str-expanded\n\tfont-stretch: expanded\n';
        content += '.mod-f-str-extra-expanded\n\tfont-stretch: extra-expanded\n';
        content += '.mod-f-str-ultra-expanded\n\tfont-stretch: ultra-expanded\n';

        for (let i = 1; i <= 100; i++) {
            content += '.mod-f-s-' + i + 'px\n\tfont-size: ' + i + 'px\n';
        }

        return new Promise((resolve, reject) => {
            fs.writeFile('./sass/modules/fonts.sass', content, (err) => {
                if (err) throw err;
                console.log(`Module Fonts created!`);
                resolve(true);
            });
        });
    }
}