(function () {
  "use strict";

  angular.module('common', [])
  .constant('ApiBasePath', 'https://amar-restaurant.herokuapp.com')
  .config(config);

  config.$inject=['$httpProvider'];
  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }

})();
