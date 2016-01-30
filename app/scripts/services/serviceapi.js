'use strict';

/**
 * @ngdoc service
 * @name realTimeKpiApp.serviceApi
 * @description
 * # serviceApi
 * Service in the realTimeKpiApp.
 */
angular.module('realTimeKpiApp')
  .service('serviceApi', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   console.log('service api is running');
    return $resource('http://localhost:8080/entries/:id');
  });
