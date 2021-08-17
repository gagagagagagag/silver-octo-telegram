import axios from 'axios'

export const ipStackInstance = axios.create({
  baseURL: 'http://api.ipstack.com/',
})

ipStackInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    access_key: process.env.REACT_APP_API_KEY,
  }

  return config
})
