describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('PhoneListCtrl', {$scope:scope});
        expect(scope.phones.length).toBe(3);

        var dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        expect(scope.date).toBe(dates[(new Date()).getDay()]);
    }));

});
