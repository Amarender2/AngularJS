(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Amarender Reddy!!";

  $scope.position = "Stand";
  $scope.image = "Sleep.png";

  $scope.flipPosition = function() {
    if($scope.position == "Stand") {
      $scope.position = "Sleep";
      $scope.image = "Stand.jpg";
    } else {
      $scope.position = "Stand";
      $scope.image = "Sleep.png";
    }
  }

  $scope.sayHello = function() {
    return "Amar likes to study algorithms a lot!!";
  }
}



})();
