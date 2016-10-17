(function() {
  // So that we dont do mistakes unknowingly,
  // will throw error if we use x = Hello;
  'use strict'

  angular.module('myFirstApp',[])

  .controller('myFirstController', function($scope) {
    $scope.name="Amar";
    $scope.greetUser = function() {
      return "Good Morning Amar";
    };
  })
})();
