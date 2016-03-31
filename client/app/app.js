angular.module('albumApp', [])
.controller('albumController', function($scope) {
  $scope.photos = initialPhotos;
});