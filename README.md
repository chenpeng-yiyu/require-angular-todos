### 使用 requirejs、angularjs、localStorage 做的一个简易便签 demo

#### 使用 karma 测试
初始化 package.json，全局安装 karma
```
npm install karma -g
```

初始化 karma.conf.js 文件，使用下面命令根据提示生产文件，再根据具体需求修改，关注basePath、files这两个配置项
```
karma init
```

安装 karma、requirejs、karma-requirejs、karma-jasmine 到 devDependencies
```
npm install karma --save-dev
npm install requirejs --save-dev
npm install karma-requirejs --save-dev
npm install karma-jasmine --save-dev
```
未完待续...