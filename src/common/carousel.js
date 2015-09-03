angular.module('ui.bootstrap.carousel').controller('CarouselCtrl', function ($scope){
  $scope.activeState = [true, false];
  
  $scope.nextSlide = function () {
    var activeIndex = $scope.activeState.indexOf(true);
    if (activeIndex >= $scope.activeState.length - 1) {
      return;
    }
    
    $scope.activeState[activeIndex] = false;
    $scope.activeState[activeIndex + 1] = true;
    };
});