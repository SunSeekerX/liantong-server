/**
 * @name User.js
 * @author SunSeekerX
 * @time 2019-12-04 16:41:28
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-16 23:20:10
 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define('app_code', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      comment: 'ID'
    },
    code: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
      comment: '用户码子'
    },
    source_ip:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      comment: '来源ip'
    },
    fail_count:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      comment: '失效次数'
    }
  })
