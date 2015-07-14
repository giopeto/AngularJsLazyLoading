//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide, $routeProvider) {
    
    sampleApp.lazy = {
        controller: $controllerProvider.register,
       	directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
    };
   
    $routeProvider.when('/AddNewOrder', {
		templateUrl: 'templates/add_order.html',
		resolve: {
			load: ['$q', '$rootScope', function ($q, $rootScope) {
				var deferred = $q.defer();
				require(['AddOrderController'], function () {
					$rootScope.$apply(function () {
						deferred.resolve();
					});
				});
				return deferred.promise;
			}]
		}
	}).when('/ShowOrders', {
		templateUrl: 'templates/show_orders.html',
		customData: 'Custom Data returned from RouteProvider',
		 
		resolve: {
			load: ['$q', '$rootScope', function ($q, $rootScope) {
				var deferred = $q.defer();
				require(['ShowOrdersController'], function () {
					$rootScope.$apply(function () {
						deferred.resolve();
					});
				});
				return deferred.promise;
			}]
		}
	}).when('/ShowOrders1', {
		templateUrl: 'templates/show_orders.html',
		customData: 'Custom Data returned from RouteProvider',
		 
		resolve: {
			load: ['$q', '$rootScope', function ($q, $rootScope) {
				var deferred = $q.defer();
				require(['ShowOrdersController'], function () {
					$rootScope.$apply(function () {
						deferred.resolve();
					});
				});
				return deferred.promise;
			}]
		}		 
	}).otherwise({
		redirectTo: '/AddNewOrder',
	});



});