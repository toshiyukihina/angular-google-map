'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGoogleMapApp
 */
angular.module('angularGoogleMapApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };    
  }]);
