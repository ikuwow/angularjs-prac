
var phonecatApp = angular.module('phonecatApp', []); // html ng-app=...

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
    // $http is added, this is dependency injector
    var dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    $scope.date = dates[(new Date()).getDay()];
    $http.get('phones/phones.json').success(function(data){
        $scope.phones = data;
        // $scope.phones = data.splice(0, 5);
    });

    // default order property
    $scope.orderProp = 'age';
});
