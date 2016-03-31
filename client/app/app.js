angular.module('albumApp', [])
.controller('albumController', function($scope) {
  $scope.photos = initialPhotos;
  $scope.currentPhoto = initialPhotos[0];
});