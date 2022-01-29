// import { store } from '@store/config'
import axios, { AxiosRequestConfig } from 'axios'
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_END_POINT}`,
})

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // config.withCredentials = false
    config.headers = {
      'Content-Type': 'application/json',
      // 'Authorization': `${process.env.REACT_APP_APIKEY}`,
      // 'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // 'Access-Control-Allow-Origin': '*',
      'X-CoinAPI-Key': `${process.env.REACT_APP_APIKEY}`,
    }

    return config
  },
  (error: any) => {
    //TODO refacor this section
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
)
export default axiosInstance
