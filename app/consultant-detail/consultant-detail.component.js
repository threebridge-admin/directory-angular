'use strict';

// Register `consultantDetail` component, along with its associated controller and template
angular.
  module('consultantDetail').
  component('consultantDetail', {
    templateUrl: 'consultant-detail/consultant-detail.template.html',
    controller: ['$routeParams', 'Consultant', '$http',
      function ConsultantDetailController($routeParams, Consultant, $http) {
        var self = this;
        // self.consultant = Consultant.get({consultantId: $routeParams.consultantId});
          $http.get('https://jq8u7kee62.execute-api.us-east-2.amazonaws.com/DEV/consultants/' + $routeParams.consultantId).then(function(response) {
              self.consultant = response.data;
          });
      }
    ]
 });
