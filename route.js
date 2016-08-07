define(['app', 'angular-route', 'indexCtrl'], function(app) {
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'indexCtrl',
				templateUrl: 'todo-index'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
});