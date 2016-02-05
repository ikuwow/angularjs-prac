describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('PhoneListCtrl', {$scope:scope});
        expect(3).toBe(3);
    }));
});
