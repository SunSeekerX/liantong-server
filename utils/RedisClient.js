/**
 * @name RedisClient.js
 * @author SunSeekerX
 * @time 2019-12-25 16:25:16
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-25 17:27:32
 */

const redis = require('redis')
const moment = require('moment')

const Config = require('../config/index')

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
  const Today = moment().format('YYYY-MM-DD')
  console.log('Today', Today)

  redisClient.hkeys(Today, function(err, keys) {
    if (err) {
      console.log(err)
      redisClient.hmset(
        Today,
        {
          init: 'init success'
        },
        redis.print
      )
    } else {
      console.log('keys', keys)
    }
  })
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

module.exports = redisClient
