'use strict';
(function(win) {
	var baseUrl = './';

	//文件依赖
	requirejs.config({
		baseUrl: baseUrl,  //依赖相对路径
		paths: {
			'angular': 'lib/angular',
			'angular-route': 'lib/angular-route',
			'app':'app',
			'route': 'route',
			'indexCtrl': 'public/js/controllers/indexCtrl',
			'dataService': 'public/js/services/dataService'
		},
		shim: {
			'angular': {
				exports: 'angular'
			},
			'angular-route': {
				deps: ['angular']
			},
			'angular-resource': {
				deps: ['angular']
			}
		}
	});

	requirejs(['angular', 'app', 'route'], function(angular, app) {

		angular.element(document).ready(function() {
			angular.bootstrap(document, ['todo']);
		});

	});


})(window);