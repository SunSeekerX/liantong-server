/**
 * @name Connect to database and export models
 * @author SunSeekerX
 * @time 2019-12-04 16:41:23
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-18 18:20:05
 */

const Sequelize = require('sequelize')
const { SequelizeConfig } = require('../../config/index.js')

// Connect to database
const sequelize = new Sequelize(
  SequelizeConfig.database,
  SequelizeConfig.username,
  SequelizeConfig.password,
  SequelizeConfig.options
)

const Code = sequelize.import(__dirname + '/Code')

sequelize.sync({ force: false }).then(
  () => {
    console.log('Sequelize sync success')
  },
  error => {
    // Connect fail
    console.error(error.message)
  }
)

// Export models
module.exports = {
  Code
}
