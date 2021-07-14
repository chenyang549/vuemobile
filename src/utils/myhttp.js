// 导入 aixos
import axios from 'axios'
// 导入 store
import store from '../store/index.js'
// 创建一个 axios 对象
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn' // 设置基地址
})
// 设置拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前判断是否存在 token,如果有，携带在请求头中，如果没有不用理会
  // 1.0 得到 token
  const token = store.state.userInfo.token
  // 2.0 判断
  if (token) config.headers.Authorization = `Bearer ${token}` // 将 token 携带在请求头中
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 暴露给外界
export default instance
