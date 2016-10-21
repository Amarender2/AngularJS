(function() {
'use strict';

angular.module('CounterApp', [])
.controller('CounterContoller', CounterContoller);

CounterContoller.$inject = ['$scope'];
function CounterContoller($scope) {

  $scope.once = 0;
  $scope.increment = 0;
  $scope.name = "Amar";

  $scope.showWatchers = function() {
    console.log($scope.$$watchersCount);
  }

  $scope.oncechange = function() {
    $scope.once = 1;
  }

  $scope.incrementchange = function() {
    $scope.increment += 1;
  }

  $scope.$watch(function () {
    console.log('Digest Loop Fired');
  })

// Not advisable, automattically setup by controllers, instead use {{}} in html
  // $scope.$watch('once', function(newValue, oldValue) {
  //   console.log('Once New Value ' + newValue);
  //   console.log('Once Old Value ' + oldValue);
  // });
  //
  // $scope.$watch('increment', function(newValue, oldValue) {
  //   console.log('Increment New Value ' + newValue);
  //   console.log('Increment Old Value ' + oldValue);
  // });

}

}
)();
