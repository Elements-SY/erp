import axios from 'axios'
// import { getToken } from "@/utils/auth";
let APIHOST;
axios.defaults.baseURL = APIHOST
axios.defaults.timeout = 10000
// console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  // 开发环境
  case 'development':
    APIHOST = '/api'
    break
  // 测试环境
  case 'testing':
    APIHOST = 'https://api.6vzz.com/'
    break
  // 生产环境
  default:
    APIHOST = 'https://api.6vzz.com/'
    break
}

// API method 封装
export const request = function (method, url, params) {
  // var token = "";
  // if (getToken("userInfo") !== undefined) {
  //   token = JSON.parse(getToken("userInfo")).api_token;
  // }
  const config = {
    baseURL: APIHOST,
    method: method.toLocaleUpperCase() || 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`
    }
    // transformRequest: [
    //   data =>
    //     Object.entries(data)
    //       .map(kv => `${kv[0]}=${kv[1]}`)
    //       .join('&')
    // ]
  }
  if (method.toLocaleUpperCase() === 'GET' || method.toLocaleUpperCase() === 'DELETE') {
    config.params = params
  } else {
    config.data = params
  }
  if (!config.url) {
    return
  }
  config.data = config.data || {}
  if (config.method === 'DELETE') {
    config.data = {}
  }
  return axios(config)
}