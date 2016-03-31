angular.module('albumApp', [])
.controller('albumController', function($scope) {
  $scope.photos = initialPhotos;
  $scope.currentPhoto = initialPhotos[0];

  $scope.setCurrentPhoto = function(photo) {
    $scope.currentPhoto = photo;
  }
});