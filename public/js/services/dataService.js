define(['app'], function(app) {
	app.factory('dataService', function() {
		'use strict'
		/**
		 * 便签存储器
		 * 数据模型 [{name: '下午去打球', isActive: true}, ...]; isActive 为 true 表示激活状态的任务，false 表示完成或取消
		 * 注：在调用存储器之前请做好todo去空的操作
		 * @type {Object}
		 */
		var storage = {
			_kyecode: 'todos_chen',
			_datas: [],
			_isInitializing: false,     //数据是否初始化
			_dataModel: function(name, isActive) {
				if(!name) return false;
				return {
					name: name,
					isActive: (typeof isActive === 'undefined') ? true : isActive
				}
			},
			_save: function() {
				localStorage.setItem(storage._kyecode, JSON.stringify(storage._datas));
				return storage._datas;
			},
			//获取datas，没必要每次查 localStorage ，数据初始化后维护 _datas 同步就可以了
			get: function() {
				if(!storage._isInitializing) {
					storage._isInitializing = true;
					storage._datas = JSON.parse(localStorage.getItem(storage._kyecode)) || [];
				}
				return storage._datas;
			},
			insert: function(todo, isActive) {
				var data = storage._dataModel(todo, isActive);
				if(data) {
					storage._datas = storage.get();
					if(!storage._datas.some(function(item) {
						return item.name == todo;
					})) {
						storage._datas.push(data);
						return storage._save();
					} else {
						return storage._datas;
					}
				}
			},
			delete: function(todo) {
				var datas = storage.get();
				storage._datas = datas.filter(function(item) {
					return item.name != todo;
				});
				return storage._save();
			},
			setActive: function(todo) {
				var datas = storage.get();
				storage._datas = datas.map(function(item) {
					if(item.name == todo) {
						item.isActive = !item.isActive;
					}
					return item;
				});
				return storage._save();
			}
		}

		return {
			getDatas: storage.get,
			insert: storage.insert,
			delete: storage.delete,
			setActive: storage.setActive
		}

	});
});