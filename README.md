
# 基于美食分享的应用

## 功能
商家可以在该应用中录入店铺信息，同时每个商户又可以在其中添加美食，用户可以浏览商户信息和相关美食，并对商户和美食进行评论打分

## 后端
- 商户类型管理
    - 录入
    - 编辑
    - 浏览
    - 删除
- 商户信息管理
    - 录入
    - 编辑
    - 浏览
    - 删除
    - 屏蔽
- 美食信息管理
    - 录入
    - 编辑
    - 浏览
    - 删除
    - 下架
- 评论信息管理
    - 浏览
    - 删除（屏蔽）
- 用户管理
    - 添加
    - 审核
    - 浏览
    - 屏蔽
    
## 后端技术
- nodejs
- express
- express MiddleWare
    - body-parser
    - multer
- mongodb : mongodb软件 + mongodb的node包 : mongoose
- mongoose

- pm2 : 进程管理
- supervisor : node热重载

### 商户类型信息
name: 类型名称

### 商户信息
name: 商户名称
pic: 封面
address: 地址
phone: 电话
type: 类型