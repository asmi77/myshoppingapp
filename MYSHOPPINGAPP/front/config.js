angular.module('shoppingApp').config(function ($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/home');

$stateProvider.state('home', {
          url: '/home',
          templateUrl: 'front/component/home/home_view.html',
          controller: 'homeController'
        });
$stateProvider.state('createaccount', {
          url: '/createaccount',
          templateUrl: 'front/component/account/account_view.html',
          controller: 'accountController'
        });
$stateProvider.state('log', {
          url: '/log',
          templateUrl: 'front/component/log/log_view.html',
          controller: 'logController'
        });
$stateProvider.state('cart', {
          url: '/cart',
          templateUrl: 'front/component/cart/cart_view.html',
          controller: 'cartController'
        });

});
