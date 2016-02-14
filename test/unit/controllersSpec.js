describe('PhoneListCtrl', function(){

    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller){
        scope = {};
        ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));

    it('should create "phones" model with 3 phones', inject(function($controller) {
        expect(scope.phones.length).toBe(3);

        var dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        expect(scope.date).toBe(dates[(new Date()).getDay()]);
    }));

    it('should set the default value of orderProp model', function(){
        expect(scope.orderProp).toBe('age');
    });

});
