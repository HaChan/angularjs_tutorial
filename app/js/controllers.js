'use strict';

/* Controllers */

var phonecatApp = angular.module("phonecatControllers", []);
phonecatApp.controller("PhoneListCtrl", function($scope, $http){
$scope.phones = [];
$http.get("phones/phones.json").success(function(data){
    $scope.phones = data;
});

  $scope.orderProp = 'age';

});
phonecatApp.controller("PhoneDetailCtrl", function($scope, $routeParams, $http){
  $http.get("phones/"+$routeParams.phoneId+".json").success(function(data){
    $scope.phone = data;
  });
});
