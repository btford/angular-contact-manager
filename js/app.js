'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'partials/index.html',
      controller: IndexCtrl
    });
    $routeProvider.when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: EditCtrl
    });
    $routeProvider.when('/add', {
      templateUrl: 'partials/add.html',
      controller: AddCtrl
    });
    $routeProvider.when('/remove/:id', {
      templateUrl: 'partials/remove.html',
      controller: IndexCtrl
    });
    $routeProvider.otherwise({
      redirectTo: '/index'
    });
  }]);
