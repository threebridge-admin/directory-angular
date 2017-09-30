'use strict';

// Register `consultantList` component, along with its associated controller and template
angular.
module('consultantList').
component('consultantList', {
    templateUrl: 'consultant-list/consultant-list.template.html',
    controller: function ConsultantListController($http) {
        var self = this;
         $http.get('https://jq8u7kee62.execute-api.us-east-2.amazonaws.com/DEV/consultants').then(function(response) {
            self.consultants = response.data;
        });
        self.orderProp = 'order';
    }});