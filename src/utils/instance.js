import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
});


// http请求拦截器
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
instance.interceptors.response.use(data => {
  return data
}, error => {
  return Promise.reject(error)
})

export default instance