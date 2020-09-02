import axios from 'axios'
import NProgress from 'nprogress'
import store from '@/store'
const service = axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  withCredentials: true,
  timeout: 50 * 1000
})

service.interceptors.request.use(
  config => {
    NProgress.start()
    store.dispatch('app/changeLoading', true)
    if (store.getters.token) {
      config.headers['X-Token'] = store.getters.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    NProgress.done(true)
    store.dispatch('app/changeLoading', false)
    const res = response.data
    if (!res.result) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    NProgress.done(true)
    store.dispatch('app/changeLoading', false)
    if (error.response) {
      const { status } = error.response
      if (status === 401) {
        const encodeUrl = encodeURIComponent(`${window.location.href}`)
        if (!window.location.href.includes('session')) {
          window.location.href = baseUrl + `/ssoLogin?redirectUrl=${encodeUrl}`
        }
        return
      }
    }
    return Promise.reject(error)
  }
)

const request = (requestObj) => {
  const { url, method, data } = requestObj

  return service({
    url,
    method: method || 'post',
    data: {
      data: data || {}
    },
    params: method === 'get' ? data : null
  })
}

export default request