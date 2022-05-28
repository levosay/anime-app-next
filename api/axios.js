import axios from 'axios';
import getConfig from 'next/config'

export const {
  publicRuntimeConfig: { baseURL },
} = getConfig()

const instance = axios.create({
  baseURL,
})

instance.interceptors.response.use(
  function (response) {
    return response?.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
