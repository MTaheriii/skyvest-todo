import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import get from 'lodash/get'
import { Http } from '../../app/http'
import { URIEnum } from '../../features/uri'
import { SliceStatus, StatusEnum } from '../enum'
import jsonData from './sample.json'

interface State<T> {
  data: T
  status: SliceStatus
  errors: any
}

const initialState: State<any> = {
  data: null,
  status: StatusEnum.IDLE,
  errors: null,
}

export const fetchCurrentCoin: any = createAsyncThunk(
  'crypto/fetchInfo',
  async (params: { id: string }) => {
    const uri = `${URIEnum.CRYPTO_CURRENT_COIN}/${params.id}`
    const response: any = await Http(uri)
    return response.payload
  }
)

const cryptoSlice = createSlice({
  name: 'Crypto',
  initialState,
  reducers: {
    clearData(state) {
      state.data = null
      state.status = StatusEnum.IDLE
    },
    setInitialStatus(state) {
      state.status = StatusEnum.IDLE
    },
  },
  extraReducers: {
    [fetchCurrentCoin.pending]: (state) => {
      state.status = StatusEnum.LOADING
    },
    [fetchCurrentCoin.fulfilled]: (state, action) => {
      state.status = StatusEnum.SUCCEEDED
      state.data = action.payload
    },
    [fetchCurrentCoin.rejected]: (state, action) => {
      state.status = StatusEnum.FAILED
      state.errors = action.payload
    },
  },
})

export const { clearData, setInitialStatus } = cryptoSlice.actions

export default cryptoSlice.reducer
