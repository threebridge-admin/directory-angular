'use strict';

describe('Consultant', function() {
  var $httpBackend;
  var Consultant;
  var consultantsData = [
    {name: 'Consultant X'},
    {name: 'Consultant Y'},
    {name: 'Consultant Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Consultant` service before each test
  beforeEach(module('core.consultant'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Consultant_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('consultants/consultants.json').respond(consultantsData);

    Consultant = _Consultant_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the consultants data from `/consultants/consultants.json`', function() {
    var consultants = Consultant.query();

    expect(consultants).toEqual([]);

    $httpBackend.flush();
    expect(consultants).toEqual(consultantsData);
  });

});
