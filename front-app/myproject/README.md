# myproject

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 简介
#### 商户信息管理后台
* 使用vue2架构，vue-router控制路由，vuex管理状态，vue-axios处理http请求
## 技术栈
* vue2+vuex+vue-router+vue-axios+vue-awesome+vue-cookie+es6+mint-ui

#### 已经实现的功能
##### 首页
* 模拟饿了么首页（静态页面）
##### 我的
* 登录
  1. 使用cookie记录登录信息，以免下次需要重新登录
* 注册
* 个人中心
* 个人资料修改
  1. 头像
  2. 性别
  3. 生日
  4. 收获地址（三级联动）
  5. 退出当前账户