/**
 * @name config.js
 * @author SunSeekerX
 * @time 2019-12-02 17:49:37
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-18 18:16:59
 */

module.exports = {
  // App running port
  port: 3000,
  // Sequelize config
  SequelizeConfig: {
    database: 'ssx_liantong',
    username: 'root',
    password: '12345678900', // Here is your mysql database password
    options: {
      host: 'localhost',
      port: '3306',
      dialect: 'mysql',
      timezone: '+08:00',
      pool: {
        max: 100,
        min: 10,
        acquire: 30000,
        idle: 10000
      },
      timezone: '+08:00',
      logging: false,
      define: {
        timestamps: true,
        freezeTableName: true,
        charset: 'utf8mb4',
        dialectOptions: {
          collate: 'utf8mb4_general_ci'
        }
      }
    }
  }
}
