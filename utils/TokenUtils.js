/**
 * @name
 * @author SunSeekerX
 * @time 2019-12-04 18:41:10
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-04 18:52:04
 */

const jwt = require('jsonwebtoken')

module.exports = {
  /**
   * @method
   * @param { Object } obj    需要加密的对象
   * @returns { String }      token 返回加密之后的token
   */
  getToken(obj, tokenSecret) {
    return jwt.sign(obj, tokenSecret)
  },
  getMessage() {}
}
