import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import get from 'lodash/get'
import { Http } from '../../app/http'
import { URIEnum } from '../uri'
import { SliceStatus, StatusEnum } from '../enum'

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

export const fetchCoinMarkets: any = createAsyncThunk(
  'crypto/fetchCurrentCoin',
  async (params: { vs_currency: string; ids: string }) => {
    const response: any = await Http(
      `${URIEnum.CRYPTO_MARKETS}?vs_currency=${params.vs_currency}&ids=${params.ids}`
    )
    return response.payload
  }
)

const cryptoMarketSlice = createSlice({
  name: 'CryptoMarket',
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
    [fetchCoinMarkets.pending]: (state) => {
      state.status = StatusEnum.LOADING
    },
    [fetchCoinMarkets.fulfilled]: (state, action) => {
      state.status = StatusEnum.SUCCEEDED
      state.data = action.payload
    },
    [fetchCoinMarkets.rejected]: (state, action) => {
      state.status = StatusEnum.FAILED
      state.errors = action.payload
    },
  },
})

export const { clearData, setInitialStatus } = cryptoMarketSlice.actions

export default cryptoMarketSlice.reducer
