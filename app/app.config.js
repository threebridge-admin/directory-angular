'use strict';

angular.
  module('consultantApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/consultants', {
          template: '<consultant-list></consultant-list>'
        }).
        when('/consultants/:consultantId', {
          template: '<consultant-detail></consultant-detail>'
        }).
        otherwise('/consultants');
    }
  ]);
