module.exports = function(config){
    config.set({
        basePath: '../',
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/js/**/*.js', // order is very important
            'test/unit/**/*.js'
        ],
        exclude : [
            'app/lib/angular/angular-loader.js',
            'app/lib/angular/*.min.js',
            'app/lib/angular/angular-scenario.js'
        ],
        frameworks: [
            'jasmine'
        ],
        browsers: [
            'Safari', 'Chrome', 'Firefox'
        ],
        plugins: [
            'karma-safari-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]
    });
};
