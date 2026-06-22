// 1. Import React tools needed to run the app
import React from 'react'
import ReactDOM from 'react-dom/client'

// 2. Import BrowserRouter to enable multiple URLs (like /qr-code)
import { BrowserRouter } from 'react-router-dom'

// 3. Import our main App component and our global CSS styles
import App from './App.jsx'
import './index.css'

// 4. Find the "root" div in index.html and render our App inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

