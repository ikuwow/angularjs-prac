
var phonecatApp = angular.module('phonecatApp', []); // html ng-app=...

phonecatApp.controller('PhoneListCtrl', function($scope) {
    var dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    $scope.date = dates[(new Date()).getDay()];
    $scope.phones = [
        {
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.',
            'age': 1
        },
        {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 2
        },
        {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 3
        }
    ];

    // default order property
    $scope.orderProp = 'age';
});
