(function () {
'use strict';

// To make js minification proof, two methods
// 1. Inline function with dependencies and function name as arguements
// 2. function.$inject = ['', '']; dependencies
angular.module('DIApp', [])
.controller('DIController', DIController);
// .controller('DIController', ['$scope', '$filter', '$injector', DIController]); - 1st method

// DIController.$inject = ['$scope', '$filter', '$injector']; -- 2nd method
// scope and filter injected
// Angular JS uses $injector service to inject the dependencies needed in a function
function DIController ($scope, $filter, $injector) {

  $scope.name = "Reddy";

  $scope.upper = function() {
    var upCase = $filter("uppercase");
    $scope.name = upCase($scope.name);
  };

  // this is what angular is using where to inject which dependencies
  console.log($injector.annotate(DIController));

  function sample(name, address) {
    return "Hello";
  }

  console.log(sample.toString());

}

})();
