'use strict';

/**
 * @ngdoc function
 * @name realTimeKpiApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the realTimeKpiApp
 */
angular.module('realTimeKpiApp')
  .controller('TableCtrl', function ($scope, serviceApi) {
    $scope.headersTable = ['Name', 'Completed', 'Note', 'last updated'];
    $scope.rowCollection = {};

      serviceApi.get().$promise.then(function (res) {
        $scope.rowCollection = res;
        console.log('res', res);
        $scope.displayedCollection = $scope.rowCollection;
      });

    $scope.addItem = function (row) {
      var newItem = new serviceApi();
      newItem.name = row.name;
      newItem.note = row.note;
      newItem.$save({name: row.name});
      var randomNum = Math.random()+10000;
      $scope.rowCollection[randomNum] = {
        id: randomNum,
        name: row.name,
        note: row.note,
        completed: false,
        updated: new Date()
      };
    };


  });
