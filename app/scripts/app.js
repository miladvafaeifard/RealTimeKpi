'use strict';

/**
 * @ngdoc overview
 * @name realTimeKpiApp
 * @description
 * # realTimeKpiApp
 *
 * Main module of the application.
 */
angular
  .module('realTimeKpiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/', {
        templateUrl: 'views/table.html',
        controller: 'TableCtrl',
        controllerAs: 'table'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
