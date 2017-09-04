'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('ConsultantCat Application', function() {

  it('should redirect `index.html` to `index.html#!/consultants', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/consultants');
  });

  describe('View: Consultant list', function() {

    beforeEach(function() {
      browser.get('index.html#!/consultants');
    });

    it('should filter the consultant list as a user types into the search box', function() {
      var consultantList = element.all(by.repeater('consultant in $ctrl.consultants'));
      var query = element(by.model('$ctrl.query'));

      expect(consultantList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(consultantList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(consultantList.count()).toBe(8);
    });

    it('should be possible to control consultant order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var consultantNameColumn = element.all(by.repeater('consultant in $ctrl.consultants').column('consultant.name'));

      function getNames() {
        return consultantNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('should render consultant specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.consultants li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/consultants/nexus-s');
    });

  });

  describe('View: Consultant detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/consultants/nexus-s');
    });

    it('should display the `nexus-s` page', function() {
      expect(element(by.binding('$ctrl.consultant.name')).getText()).toBe('Nexus S');
    });

    it('should display the first consultant image as the main consultant image', function() {
      var mainImage = element(by.css('img.consultant.selected'));

      expect(mainImage.getAttribute('src')).toMatch(/img\/consultants\/nexus-s.0.jpg/);
    });

    it('should swap the main image when clicking on a thumbnail image', function() {
      var mainImage = element(by.css('img.consultant.selected'));
      var thumbnails = element.all(by.css('.consultant-thumbs img'));

      thumbnails.get(2).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/consultants\/nexus-s.2.jpg/);

      thumbnails.get(0).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/consultants\/nexus-s.0.jpg/);
    });

  });

});
