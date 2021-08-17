import axios from 'axios'

export const ipStackInstance = axios.create({
  baseURL: 'http://api.ipstack.com/',
})

ipStackInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    fields:
      'ip,country_name,region_name,city,zip,latitude,longitude,location.country_flag_emoji',
    access_key: process.env.REACT_APP_API_KEY,
  }

  return config
})
