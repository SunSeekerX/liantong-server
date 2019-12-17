/**
 * @name routes
 * @author SunSeekerX
 * @time 2019-12-02 17:33:31
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-17 01:03:05
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
}
