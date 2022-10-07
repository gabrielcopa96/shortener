import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://shurtener-back.onrender.com' || "http://localhost:3001";

// 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
