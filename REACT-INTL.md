# lets start with installtion 

  > npm i -S react-intl

## the files structure
 -src
 |_ lang
    |_ ar-011.json
    |_ en-US.json
    |_ LocalizationProvider.js // its my index file for using context api and intl provider to wrap the app to handle the locale state

## Provider file 
```
import local_en from './en-US.json' // my locale english launage file
import local_ar from './ar-001.json' // my locale arabic launage file
import React, { createContext, useState } from 'react'
import { createIntl, IntlProvider, createIntlCache } from 'react-intl'

export const LocaleContext = createContext() // to handle the locale state

const messages = {
  en: local_en,
  ar: local_ar,
} // to set the lang

const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem('lang'))

  const cache = createIntlCache()
  const intel = createIntl(
    {
      locale: locale,
      messages: messages[locale],
    },
    cache
  ) // to create intl object to store my data
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={intel.locale} messages={intel.messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  )
}

export default LocalizationProvider
```
> in index.js
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

// import local files
import App from './App'
import LocalizationProvider from './lang/LocalizationProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <LocalizationProvider>
        <App />
    </LocalizationProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


```

### Functions and commpents used
  > FormattedMessage // to render the my locale string
  > useIntl() // to render my message translated into the placeholder

