/**
 * @name
 * @author SunSeekerX
 * @time 2019-12-10 17:56:24
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-17 16:06:59
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
  },
  async friendHelp(req, res, next) {
    const { code, encryptMobile } = req.body
    console.log(code, encryptMobile);
    // 传过来参数数组
    if (code && encryptMobile) {
      next()
    } else {
      Util.response(res, {
        msg: 'missing params',
        success: false,
        code: 400
      })
    }
  }
}
