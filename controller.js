var consultantApp = angular.module('directoryApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    var refresh = function() {
        $http.get('/consultantList').then(function(response) {
            $scope.consultantList = response.data;
            $scope.consultant = null;
        });
    };

    refresh();

    $scope.addConsultant = function() {
        $http.post('/consultantList', $scope.consultant).then(function(response) {
            refresh();
        });
    };

    $scope.remove = function(id) {
        $http.delete('/consultantList/' + id).then(function(response) {
            refresh();
        });
    };

    $scope.edit = function(id) {
        $http.get('/consultantList/' + id).then(function(response) {
            $scope.consultant = response.data;
        });
    };

    $scope.update = function() {
        $http.put('/consultantList/' + $scope.consultant._id, $scope.consultant).then(function(response) {
            refresh();
        });
    };

    $scope.deselect = function() {
        $scope.consultant = "";
    };

}]);
