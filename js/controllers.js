'use strict';

/* Controllers */

//IndexCtrl.$inject = [];

function AppCtrl($scope) {
  $scope.contacts = [{name: 'Brian'}];
}

function IndexCtrl($scope) {}
function EditCtrl($scope, $routeParams) {

}
function AddCtrl($scope) {
  $scope.add = function () {
    $scope.contacts.push()
  };
}
function RemoveCtrl($scope, $routeParams) {
  $scope.remove = function () {

  };
}
