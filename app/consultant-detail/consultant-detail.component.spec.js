'use strict';

describe('consultantDetail', function() {

  // Load the module that contains the `consultantDetail` component before each test
  beforeEach(module('consultantDetail'));

  // Test the controller
  describe('ConsultantDetailController', function() {
    var $httpBackend, ctrl;
    var xyzConsultantData = {
      name: 'consultant xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('consultants/xyz.json').respond(xyzConsultantData);

      $routeParams.consultantId = 'xyz';

      ctrl = $componentController('consultantDetail');
    }));

    it('should fetch the consultant details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.consultant).toEqual({});

      $httpBackend.flush();
      expect(ctrl.consultant).toEqual(xyzConsultantData);
    });

  });

});
