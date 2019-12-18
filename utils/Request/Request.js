/**
 * @name Request.js
 * @author SunSeekerX
 * @time 2019-12-02 18:11:35
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-18 22:09:20
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
        timeout: 15000,
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
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
