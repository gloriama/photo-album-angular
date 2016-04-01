angular.module('albumApp', [])
.controller('albumController', function($scope) {
  $scope.photos = initialPhotos;
  $scope.currentPhoto = initialPhotos[0];
  $scope.currentRating = $scope.currentPhoto.rating;
  $scope.ratings = [-1, 0, 1];

  $scope.setCurrentPhoto = function(photo) {
    $scope.currentPhoto = photo;
    $scope.currentRating = $scope.currentPhoto.rating;
  }

  $scope.updateRating = function(rating) {
    $scope.currentPhoto.rating = rating;
    $scope.currrentRating = rating;
  };

  $scope.addPhoto = function(title, url) {
    $scope.photos.push({
      title: title,
      url: url,
      rating: 0
    });
  };

});