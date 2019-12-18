/**
 * @name Common.js
 * @author SunSeekerX
 * @time 2019-12-17 14:56:05
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-18 18:14:01
 */

const axios = require('../utils/Request/index.js')
/**
 * @description The request here requires nginx to proxy to the active URL
 */
module.exports = {
  // friendHelp
  friendHelp({ encryptMobile, code }) {
    return axios.request({
      url: `http://localhost/DoubleCard_Pro`,
      method: 'post',
      data: {
        encryptMobile,
        invitationCode: code
      }
    })
  }
}
