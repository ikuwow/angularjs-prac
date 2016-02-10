exports.config = {
    allScriptsTimeout: 11000,

    specs: [
      'e2e/*.js'
    ],

    capabilities: {
      'browserName': [ 'safari', 'chrome', 'firefox' ]
    },

    chromeOnly: true,

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
};
