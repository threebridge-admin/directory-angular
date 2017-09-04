'use strict';

// Register `consultantList` component, along with its associated controller and template
angular.
  module('consultantList').
  component('consultantList', {
    templateUrl: 'consultant-list/consultant-list.template.html',
    controller: ['Consultant',
      function ConsultantListController(Consultant) {
        this.consultants = Consultant.query();
        this.orderProp = 'order';
      }
    ]
  });
