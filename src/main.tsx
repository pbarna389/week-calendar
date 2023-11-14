import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { calendarStore } from './store/WeekStore.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={calendarStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
