'use strict';

// Register `consultantDetail` component, along with its associated controller and template
angular.
  module('consultantDetail').
  component('consultantDetail', {
    templateUrl: 'consultant-detail/consultant-detail.template.html',
    controller: ['$routeParams', 'Consultant',
      function ConsultantDetailController($routeParams, Consultant) {
        var self = this;
        self.consultant = Consultant.get({consultantId: $routeParams.consultantId});
      }
    ]
 });
