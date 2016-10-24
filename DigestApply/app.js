(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function() {
    $timeout(function () {
      $scope.counter++;
      console.log('Counter Incremented using timeout service');
    }, 2000);
  };

  $scope.upCounter1 = function () {
    setTimeout(function() {
      // Will catch the error or exceptions thrown
      // Will run the digest loop
      $scope.$apply(function () {
        $scope.counter++;
        console.log('Counter Incremented');
      });
    }, 2000);
  };

  // $scope.upCounter = function () {
  //   setTimeout(function() {
  //     $scope.counter++;
  //     console.log('Counter Incremented');
  //     // Kick off manually
  //     // Problem of doing this
  //     // Any error, exception thrown will not be visible to angular js
  //     $scope.$digest();
  //   }, 2000);
  // };
}

})();
