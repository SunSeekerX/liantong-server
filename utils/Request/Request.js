/**
 * @name Request.js
 * @author SunSeekerX
 * @time 2019-12-02 18:11:35
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-17 16:07:13
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
    async config => config,
    error => Promise.reject(error)
  )

  // response interceptor
  service.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
  )
  return service
}
