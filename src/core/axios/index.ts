import axios from 'axios'

export const ipStackInstance = axios.create({
  baseURL: 'http://api.ipstack.com/',
})
