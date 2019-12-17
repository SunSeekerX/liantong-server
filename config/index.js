/**
 * @name config.js
 * @author SunSeekerX
 * @time 2019-12-02 17:49:37
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-17 01:09:33
 */

module.exports = {
  // App running port
  port: 3000,
  // Sequelize config
  SequelizeConfig: {
    database: 'ssx_liantong',
    username: 'root',
    password: '12345678900',
    options: {
      host: 'localhost',
      port: '3306',
      dialect: 'mysql',
      timezone: '+08:00',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      timezone: '+08:00', //东八时区
      // 默认输出执行sql语句
      logging: false,
      define: {
        // 默认创建表有 createAt, updateAt
        timestamps: true,
        // 可以给表设置别名
        freezeTableName: true,
        charset: 'utf8mb4',
        dialectOptions: {
          collate: 'utf8mb4_general_ci'
        },
        // 字段以下划线（_）来分割（默认是驼峰命名风格）
        // underscored: true
      }
    }
  },
  // jsonwebtoken secret
  tokenSecret: 'ssx_award',
}
