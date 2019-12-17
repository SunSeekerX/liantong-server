/**
 * @name Request.js
 * @author SunSeekerX
 * @time 2019-12-02 18:11:35
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-04 15:32:08
 */

const axios = require('axios') // Axios

/**
 * @name Create request object
 * @param { String } baseURL String baseUrl
 * @returns { Object } request obj
 */

module.exports = function createRequest(options) {
  // create an axios instance
  const service = axios.create(
    Object.assign(
      {
        baseURL: '',
        withCredentials: false,
        timeout: 15000
      },
      options
    )
  )

  // request interceptor
  service.interceptors.request.use(
    async config => {
      // Token
      // if (store.state.token) {
      //   config.headers['token'] = store.state.token
      // }
      // if (config.method === 'post') {
      //   config.data = qs.stringify(config.data)
      // }
      if (config.method === 'get') {
        // config.url = config.url + '?' + qs.stringify(config.data)
        // 防止接口缓存
        config.params = {
          _t: Date.parse(new Date()) / 1000,
          ...config.params
        }
      }
      // if (config.method === 'upload') {
      //   config.method = 'post'
      // }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // response interceptor
  service.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
  )
  return service
}
