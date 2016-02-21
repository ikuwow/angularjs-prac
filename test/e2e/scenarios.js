
describe('PhoneCat App', function() {
    describe('Phone list view', function() {

        beforeEach(function(){
            browser.get('app/index.html');
        });

        it('should display the current filter value in the title bar', function() {

            var query = element(by.model('query'));

            query.clear();
            expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

            query.sendKeys('nexus');
            expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
        });

        it('should render phone specific links', function() {
            var query = element(by.model('query'));
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            browser.getLocationAbsUrl().then(function(url) {
              expect(url).toBe('/phones/nexus-s');
            });
        });
    });
});
