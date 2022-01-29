import { AxiosRequestConfig, AxiosResponse } from 'axios'
import axiosInstance from './axiosInstance'
// import { store } from '@store/config'

export const Http = async (url: string, options?: AxiosRequestConfig) => {
  // const state = store.getState()
  try {
    const response = await axiosInstance(url, {
      ...options,
    })
    console.log('Http response', response)
    return {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      payload: response.data,
    }
  } catch (e) {
    const error = e as any
    const {
      response: { status = '', statusText = '', headers = {}, data = null },
    } = error
    const result: any = {
      status,
      statusText,
      headers,
      payload: data,
    }
    throw result as AxiosResponse
  }
}
