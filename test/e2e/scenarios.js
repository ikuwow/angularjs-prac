
describe('PhoneCat App', function() {

    it('should redirect index.html to index.html#/phones', function() {
        browser.get('app/index.html');
        browser.getLocationAbsUrl().then(function(url) {
            expect(url).toEqual('/phones');
        });
    });

    describe('Phone list view', function() {

        beforeEach(function(){
            browser.get('app/index.html');
        });

        /* scope out now...specific links
        it('should display the current filter value in the title bar', function() {

            var query = element(by.model('query'));

            query.clear();
            expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

            query.sendKeys('nexus');
            expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
        });
        */

        it('should render phone specific links', function() {
            var query = element(by.model('query'));
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            browser.getLocationAbsUrl().then(function(url) {
              expect(url).toBe('/phones/nexus-s');
            });
        });


    });

    describe('Phone detail view', function() {
        beforeEach(function() {
            browser.get('app/index.html#/phones/nexus-s');
        });

        it('should display placeholder page with phoneId', function() {
            expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
        });
    });
});
