/**
 * @name CommonController.js
 * @author SunSeekerX
 * @time 2019-12-10 17:55:54
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-21 18:32:21
 */

const axios = require('axios')
const CryptoJS = require('crypto-js')
const redis = require('redis')

const Config = require('../../config/index')
const Util = require('../../utils/Utils.js')
const { Code } = require('../modules/index.js')
const redisClient = redis.createClient({
  host: Config.redisConfig.host,
  port: Config.redisConfig.port,
  password: Config.redisConfig.password
})
redisClient.on('connect', () => {
  console.log('connect>>>')
})
redisClient.on('ready', () => {
  console.log('ready>>>')
})
redisClient.on('reconnecting', () => {
  console.log('reconnecting>>>')
})
redisClient.on('end', () => {
  console.log('Redis end!!!')
})
redisClient.on('warning', e => {
  console.log('warning>>>', e)
})
redisClient.on('error', err => {
  console.log('Error>>>', err)
})

module.exports = {
  // Hello world
  async helloWorld(req, res) {
    Util.response(res, {
      msg: 'Hello World'
    })
  },

  async add(req, res) {
    let { code } = req.body

    // 单次插入最大为1000条
    if (code.length > 1000) {
      code = code.slice(0, 1000)
    }

    // 对添加的数据去重
    code = Util.unique(code)

    // 检查之后的code数组
    const checkCodeArr = []

    // 检查code
    //
    const regStr = /([a-zA-Z0-9@-]{9})/
    for (let i = 0; i < code.length; i++) {
      if (regStr.test(code[i])) {
        checkCodeArr.push(code[i])
      }
    }
    // 添加结果集
    const resArr = []
    // 循环添加
    for (let i = 0; i < checkCodeArr.length; i++) {
      try {
        // 检查数据库该code是否存在
        const checkRes = await Code.findOrCreate({
          where: {
            code: checkCodeArr[i]
          },
          defaults: {
            code: checkCodeArr[i],
            source_ip: req.ip,
            fail_count: 0
          }
        })

        if (checkRes[1] === false) {
          resArr.push({
            index: i,
            code: checkCodeArr[i],
            msg: '该code已经存在',
            success: false
          })
        } else {
          resArr.push({
            index: i,
            code: checkCodeArr[i],
            msg: '添加成功',
            success: true
          })
        }
      } catch (error) {
        resArr.push({
          index: i,
          code: checkCodeArr[i],
          msg: '服务器错误',
          success: false
        })
        console.log(error)
      }
    }

    Util.response(res, {
      msg: '执行成功',
      data: resArr
    })
  },

  async getCode(req, res) {
    let { limit, offset } = req.body
    
    redisClient.get(req.ip, (err, res) => {
      // res = Number(res)
      redisClient.set(req.ip, new Date(), redis.print)
    })

    limit = Number(limit)
    offset = Number(offset)

    if (limit > 500) {
      limit = 500
    }
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
  },

  async deleteCode(req, res) {
    const { code } = req.body
    if (code) {
      const deleteRes = await Code.destroy({
        where: {
          code
        }
      })
      if (deleteRes === 1) {
        Util.response(res, {
          msg: '删除成功'
        })
      } else {
        Util.response(res, {
          success: false,
          code: 400,
          msg: `找不到${code}记录`
        })
      }
    }
  },

  async friendHelp(req, res) {
    const { string } = req.body
    try {
      const bytes = CryptoJS.AES.decrypt(string, Config.CryptoJSKey)
      const originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

      const code = originalText.code
      const encryptMobile = originalText.encryptMobile
      axios({
        method: 'post',
        url: `https://m.client.10010.com/DoubleCard_Pro/static/doubleCard/actFriendHelp?encryptMobile=${encryptMobile}&invitationCode=${code}`,
        data: {
          encryptMobile,
          invitationCode: code
        }
      })
        .then(response => {
          Util.response(res, {
            msg: '',
            data: response.data
          })
          // res.send(response.data)
        })
        .catch(() => {
          Util.response(res, {
            success: false,
            code: 400,
            msg: '',
            respMsg: '内部服务器错误'
          })
        })
    } catch (error) {
      Util.response(res, {
        success: false,
        code: 400,
        msg: '你想干嘛鸭？？？😂'
      })
    }
  }
}
