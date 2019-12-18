/**
 * @name
 * @author SunSeekerX
 * @time 2019-12-17 14:56:05
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-18 12:59:50
 */

const axios = require('../utils/Request/index.js')

module.exports = {
  // friendHelp
  friendHelp({ encryptMobile, code }) {
    return axios.request({
      url: `http://localhost/DoubleCard_Pro`,
      method: 'post',
      data:{
        encryptMobile,
        invitationCode: code
      },
    })
  }
}
