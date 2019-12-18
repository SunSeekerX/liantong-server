# 预览地址：[http://yoouu.cn:3000/#/](http://yoouu.cn:3000/#/)

# liantong-server

> 活动项目服务端
>
> 根目录下`config/index.js`用来配置后端信息
>
> 项目已经于2019-12-18 18:21:21进行代码整理。

> 特点
>
> - 统一管理api
> - 2019-12-18 18:23:18 基于最新的依赖构建编写
> - 很好的Node+express项目案例
> 
> 

## 启动项目

### 克隆本项目到你的本地

```bash
git clone https://github.com/SunSeekerX/liantong-server
```

### 安装依赖

```bash
yarn
```

### 修改数据库信息

> 在`${app}/config/index.js SequelizeConfig`对象内配置你的数据库信息
>
> ```javascript
> SequelizeConfig: {
>     database: 'ssx_liantong', // Database name
>     username: 'root', // Database username
>     password: '12345678900', // Database password
>     options: {
>       host: 'localhost', // Database host
>       port: '3306', // Database port
>       dialect: 'mysql',
>       timezone: '+08:00',
>       pool: {
>         max: 100,
>         min: 10,
>         acquire: 30000,
>         idle: 10000
>       },
>       timezone: '+08:00',
>       logging: false,
>       define: {
>         timestamps: true,
>         freezeTableName: true,
>         charset: 'utf8mb4',
>         dialectOptions: {
>           collate: 'utf8mb4_general_ci'
>         }
>       }
>     }
>   }
> ```
>
> 
>
> 后端的接口地址和端口默认为`http://127.0.0.1:3000`



### 启动项目

```bash
yarn serve
```

