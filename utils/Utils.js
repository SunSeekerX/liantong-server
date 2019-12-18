/**
 * @name Utils.js
 * @author SunSeekerX
 * @time 2019-12-02 17:49:52
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-18 18:18:30
 */

module.exports = {
  /**
   * @name response Func
   * @param {Object} res Express response obj
   * @param {Object} data message Object
   */
  response(res, data) {
    return res.send(
      Object.assign(
        { code: 200, success: true, msg: 'Success', data: {} },
        data
      )
    )
  },
  unique(arr) {
    return Array.from(new Set(arr))
  }
}
