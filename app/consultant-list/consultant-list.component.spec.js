'use strict';

describe('consultantList', function() {

  // Load the module that contains the `consultantList` component before each test
  beforeEach(module('consultantList'));

  // Test the controller
  describe('ConsultantListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('consultants/consultants.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('consultantList');
    }));

    it('should create a `consultants` property with 2 consultants fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.consultants).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.consultants).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
