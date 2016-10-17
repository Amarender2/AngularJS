(function () {
'use strict';

angular.module('nameCalculator', [])

.controller('nameCalculatorController',function($scope) {
  $scope.name="";
  $scope.totalValue=0;

  $scope.displayNumeric=function() {
    $scope.totalValue = calculateValue($scope.name);;
  };

  function calculateValue(name) {
    var value = 0;
    for(var i = 0 ;i < name.length; i++) {
      value += name.charCodeAt(i);
    }
    return value;
  };

});


})();
