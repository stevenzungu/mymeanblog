(function() {
  angular.module('mymeanblog')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'SignupController',
        templateUrl: 'html/views/signup.html'
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/views/login.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
}());


//moved the route configuration to a seprete file
