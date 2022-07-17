import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'

import reportWebVitals from './reportWebVitals'

// import local files
import App from './App'
import LocalizationProvider from './lang/LocalizationProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <LocalizationProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </LocalizationProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
