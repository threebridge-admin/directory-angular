'use strict';

angular.
  module('core.consultant').
  factory('Consultant', ['$resource',
    function($resource) {
      return $resource('consultants/:consultantId', {}, {
        query: {
          method: 'GET',
          params: {consultantId: 'consultants'},
          isArray: true
        }
      });
    }
  ]);
