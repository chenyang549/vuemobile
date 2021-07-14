// 管理所有与用户相关的网络请求
// 导入 myhttp.js
import myhttp from '../utils/myhttp.js'

// 封装方法：登录
function apiLogin ({ mobile, code }) {
  return myhttp({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile: mobile,
      code: code
    }
  })
}

// 导出方法
export {
  apiLogin
}
