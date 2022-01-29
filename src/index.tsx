import React from 'react'
import ReactDOM from 'react-dom'

import { create } from 'jss'
import rtl from 'jss-rtl'

import './index.css'
import App from './App'
import { store } from './store/config'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { StylesProvider, jssPreset } from '@mui/styles'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Crypto } from './features/crypto'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
const theme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      xs: 600,
      sm: 960,
      md: 1200,
      lg: 1600,
      xl: 1601,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="crypto" element={<Crypto />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
