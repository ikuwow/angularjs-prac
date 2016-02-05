module.exports = function(config){
    config.set({
        basePath: '../',
        files: [
            'test/unit/**/*.js',
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
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
            'Safari'
        ],
        plugins: [
            'karma-safari-launcher',
            'karma-jasmine'
        ]
    });
};
