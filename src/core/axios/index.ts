import axios from 'axios'

import { LocationData } from '../models/locationData'

export const ipStackInstance = axios.create({
  baseURL: 'https://api.ipstack.com/',
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

ipStackInstance.interceptors.response.use((value) => {
  // Validate the response
  const responseData = value.data as LocationData

  // A simple runtime check if the value was found
  // can be improved in the future
  if (responseData.latitude === null) throw new Error('Not Found!')

  return value
})
