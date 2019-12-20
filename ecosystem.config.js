/**
 * @name
 * @author SunSeekerX
 * @time 2019-12-20 11:31:40
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-20 11:39:21
 */

module.exports = {
  apps: [
    {
      name: 'liantong',
      script: 'app.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
