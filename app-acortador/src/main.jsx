import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import App from './App'
import './index.css'

axios.defaults.baseURL = 'https://short-0j0q.onrender.com' || 'http://localhost:3001';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
