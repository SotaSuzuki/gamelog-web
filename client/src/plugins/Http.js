import axios from 'axios'
import { API } from '@/constants'

const fetch = (path, method, config) => {
  const url = `${API.ORIGIN}${path}`

  return axios[method](url, config)
    .then((res) => {
      return Promise.resolve(res)
    })
    .catch((e) => Promise.reject(e))
}

const http = {
  get (path) {
    return fetch(path, 'get')
  },
}

export const Http = {
  install (Vue) {
    Vue.prototype.$http = http
  },
}
