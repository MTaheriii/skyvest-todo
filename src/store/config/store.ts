import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from '@reduxjs/toolkit'
import cryptoReducer from '../../features/crypto/cryptoSlice'
import cryptoMarketReducer from '../../features/crypto/cryptoMarketSlice'
import counterReducer from '../../features/counter/counterSlice'

const preloadedState = {}

const combinedReducer = combineReducers({
  counter: counterReducer,
  crypto: cryptoReducer,
  markets: cryptoMarketReducer,
})

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
