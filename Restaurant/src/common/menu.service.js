(function () {
  "use strict";

  angular.module('common')
  .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiBasePath'];
  function MenuService($http, ApiBasePath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiBasePath + '/categories.json').then(function (response) {
        return response.data;
      });
    };
  }

}

)();
