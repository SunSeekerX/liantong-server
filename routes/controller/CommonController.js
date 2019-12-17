/**
 * @name
 * @author SunSeekerX
 * @time 2019-12-10 17:55:54
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-17 01:23:54
 */

const Util = require('../../utils/Utils.js')
const { Code } = require('../modules/index.js')

module.exports = {
  // Hello world
  async helloWorld(req, res) {
    Util.response(res, {
      msg: 'Hello World'
    })
  },

  async add(req, res) {
    let { code } = req.body

    // 对添加的数据去重
    code = Util.unique(code)
    // 添加结果集
    const resArr = []
    // 循环添加
    for (let i = 0; i < code.length; i++) {
      if (code[i]) {
        try {
          // 检查数据库该code是否存在
          const checkRes = await Code.findOrCreate({
            where: {
              code: code[i]
            },
            defaults: {
              code: code[i],
              source_ip: req.ip,
              fail_count: 0
            }
          })

          if (checkRes[1] === false) {
            resArr.push({
              index: i,
              code: code[i],
              msg: '该code已经存在',
              success: false
            })
          } else {
            resArr.push({
              index: i,
              code: code[i],
              msg: '添加成功',
              success: true
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
    }

    Util.response(res, {
      msg: '执行成功',
      data: resArr
    })
  },

  async getCode(req, res) {
    let { limit, offset } = req.body
    limit = Number(limit)
    offset = Number(offset)

    try {
      const getRes = await Code.findAndCountAll({
        where: {},
        limit: limit || 50,
        offset: offset || 0,
        order: [['createdAt', 'DESC']]
      })

      Util.response(res, {
        msg: '执行成功',
        data: getRes
      })
    } catch (error) {
      console.log(error)
      Util.response(res, {
        code: '500',
        msg: '服务器内部错误',
        success: false
      })
    }
  }
}
