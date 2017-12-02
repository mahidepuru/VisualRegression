var path = require('path');
var VisualRegressionCompare = require('wdio-visual-regression-service/compare');
function getScreenshotName(basePath) {
    return function (context) {
        var type = context.type;
        var testName = context.test.title;
        var browserVersion = parseInt(context.browser.version, 10);
        var browserName = context.browser.name;
        var browserWidth = context.meta.width;
        return path.join(basePath, `${testName}_${type}_${browserName}_v${browserVersion}_${browserWidth}.png`);
    };
}

exports.config = {
    specs: [
        'test/specs/**'
    ],
    exclude: [],

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'

    }],

    sync: true,
    logLevel: 'silent',
    bail: 0,

    screenshotPath: './errorShots/',
    baseUrl: 'http://www.sky.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: ['selenium-standalone','visual-regression'],

    visualRegression: {
        compare: new VisualRegressionCompare.LocalCompare({
            referenceName: getScreenshotName(path.join(process.cwd(), 'screenshots/reference')),
            screenshotName: getScreenshotName(path.join(process.cwd(), 'screenshots/screen')),
            diffName: getScreenshotName(path.join(process.cwd(), 'screenshots/diff')),
            misMatchTolerance: 0.01,
        }),
        viewportChangePause: 300,
        widths: [320, 480, 640, 1024],
        orientations: ['landscape',],
    },

    framework: 'mocha',

    reporters: ['spec'],


    mochaOpts: {
        ui: 'bdd'
    },
        mochaOpts: {
            timeout: 99999999
        }


}

