class Main {
    constructor() {
        this.utils = new Utils();

        if (argv.build === true) {
            new Builder(() => {
                console.log('All is done');
            });
        } else if (argv.release === true) {
            new Builder(() => {
                this.utils.buildCss();
            });
        } else if (argv.buildCss === true) {
            this.utils.buildCss();
        } else if (argv.size === true && argv.sass === true) {
            exec('du -h -s sass', (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`Sass size: ${stdout}`);
            });
        } else if (argv.size === true && argv.css === true) {
            exec('du -h -s css', (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`Css size: ${stdout}`);
            });
        } else if (argv.size === true && argv.js === true) {
            exec('du -hs cssmod.js', (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`Lib size: ${stdout}`);
            });
        } else {
            this.utils.showHelp();
        }
    }
}