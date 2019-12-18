/**
 * @name routes
 * @author SunSeekerX
 * @time 2019-12-02 17:33:31
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-18 11:28:09
 */

const URL = require('./constant/URL.js')
const Controller = require('./controller/index.js')
const Policies = require('./policies/index.js')

module.exports = app => {
  app
    .get(
      URL.Public.HELLO_WORLD,
      Controller.Common.helloWorld
    )
    .post(
      URL.Public.ADD,
      Policies.Common.add,
      Controller.Common.add
    )
    .post(
      URL.Public.GET_CODE,
      Controller.Common.getCode
    )
    .post(
      URL.Public.FRIEND_HELP,
      Policies.Common.friendHelp,
      Controller.Common.friendHelp
    )
    .post(
      URL.Public.DELETE_CODE,
      Policies.Common.deleteCode,
      Controller.Common.deleteCode
    )
}
