'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGoogleMapApp
 */
angular.module('angularGoogleMapApp')
  .controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {
    angular.extend($scope, {
      map: {
        center: {
          latitude: 35.681382,
          longitude: 139.766084
        },
        options: {
          maxZoom: 20,
          minZoom: 3
        },
        zoom: 16,
        control: {},
        markers: []
      },
      address: ''
    });

    $scope.search = function(address) {
      $log.debug(address);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          $log.debug(results);
          $scope.map.control.getGMap().setCenter(results[0].geometry.location);
          $scope.map.markers = [];
          for (var i = 0; i < results.length; i++) {
            $scope.map.markers.push({
              options: {
                draggable: true,
                labelAnchor: '10 39',
                labelContent: i,
                labelClass: 'labelMarker'
              },
              id: i,
              latitude: results[i].geometry.location.lat(),
              longitude: results[i].geometry.location.lng()
            });
          }
        } else {
          $log.warn(status);
        }
      });
    };
  }]);
