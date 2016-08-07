define(['app', 'dataService'], function(app) {

	app.controller('indexCtrl', ['$scope', 'dataService', function($scope, dataService) {
		'use strict'

		/**
		 * 初始化便签数据和监听
		 */
		$scope.datas = dataService.getDatas();
		// $scope.$watch($scope.datas, function(datas) {
		// 	console.log(datas);
		// });

		/**
		 * 创建便签
		 */
		$scope.creatTask = function(e) {
			if(e.charCode == 13) {
				var todo = $scope.newTask.trim();
				$scope.datas = dataService.insert(todo);
				$scope.newTask = '';
			}
		};

		/**
		 * 切换便签状态
		 */
		$scope.setActive = function(todo) {
			$scope.datas = dataService.setActive(todo);
		};

		/**
		 * 删除某条便签
		 */
		$scope.delete = function(todo) {
			$scope.datas = dataService.delete(todo);
		};

	}]);
});