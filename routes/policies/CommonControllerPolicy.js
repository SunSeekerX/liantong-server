/**
 * @name CommonControllerPolicy.js
 * @author SunSeekerX
 * @time 2019-12-10 17:56:24
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-18 18:20:30
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
  async deleteCode(req, res, next) {
    const { code } = req.body
    const regStr = /([a-zA-Z0-9@-]{9})/
    if (regStr.test(code)) {
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
