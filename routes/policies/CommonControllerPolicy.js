/**
 * @name
 * @author SunSeekerX
 * @time 2019-12-10 17:56:24
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-17 00:07:07
 */

const Util = require('../../utils/Utils.js')

module.exports = {
  async add(req, res, next) {
    const { code } = req.body
    // 传过来参数数组
    if (Array.isArray(code) && code.length) {
      next()
    } else {
      Util.response(res, {
        msg: 'code illegality',
        success: false,
        code: 400
      })
    }
  }
}
