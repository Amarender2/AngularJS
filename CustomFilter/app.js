(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('replace',replaceNameFactory)
.filter('replaceArgs', replaceNameFactoryWithArgs);

MsgController.$inject = ['$scope', '$filter', 'replaceFilter', 'replaceArgsFilter'];
function MsgController($scope, $filter, replaceFilter, replaceArgsFilter) {
  $scope.name = "Amarender Reddy!!";

  $scope.sayHello = function() {
    var msg = "Amar likes to study algorithms a lot!!";
    var output = $filter('uppercase')(msg);
    return output;
  }

  $scope.replaceFullName = function() {
    var msg = "Amar likes to study algorithms a lot!!";
    var replacedMsg = replaceFilter(msg);
    return replacedMsg;
  }

  $scope.replaceFullNameWithArgs = function() {
    var msg = "Amar likes to study algorithms a lot!!";
    var replacedMsg = replaceArgsFilter(msg, 'likes', 'loves');
    return replacedMsg;
  }
}

function replaceNameFactory() {
  return function(message) {
    message = message.replace("Amar", "Amarender");
    return message;
  };
}

function replaceNameFactoryWithArgs() {
  return function(message, target, replace) {
    message = message.replace(target, replace);
    return message;
  };
}

})();
