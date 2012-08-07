/* Controllers */

contactManager.controller('AppCtrl',
  function AppCtrl ($scope) {
    $scope.contacts = [{
      name: 'Brian Ford',
      phone: '555-555-5555',
      address: [
        '1600 Amphitheatre Parkway',
        'Mountain View, CA 94043'
      ]
    }];
  });

contactManager.controller('InfoCtrl',
  function InfoCtrl($scope, $routeParams) {
    $scope.contact = $scope.contacts[$routeParams.id];
  });

contactManager.controller('AddCtrl',
  function AddCtrl($scope, $location) {
    $scope.contact = {};
    $scope.add = function () {
      $scope.contacts.push($scope.contact);
      $location.url('/');
    };
  });

contactManager.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location) {
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.edit = function () {
      $scope.contacts[$routeParams.id] = $scope.contact;
      $location.url('/');
    };
  });

contactManager.controller('RemoveCtrl',
  function RemoveCtrl($scope, $routeParams, $location) {
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.remove = function () {
      $scope.contacts.splice($routeParams.id, 1);
      $location.url('/');
    };
    $scope.back = function () {
      $location.url('/');
    };
  });
