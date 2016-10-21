(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Amarender Reddy!!";

  $scope.position = "Stand";
  $scope.image = "Sleep.png";
  $scope.cost = .45;

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
    var msg = "Amar likes to study algorithms a lot!!";
    var output = $filter('uppercase')(msg);
    return output;
  }
}



})();
