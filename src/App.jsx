// 1. Import Routes and Route from the router library
import { Routes, Route } from 'react-router-dom'

// 2. Export our App function as the default export so main.jsx can use it
export default function App() {
  return (
    <div>
      <h1>My All-in-One Toolkit</h1>

      {/* 
        Routes acts like a switch statement. 
        It looks at the URL in the browser and decides what to show.
      */}
      <Routes>
        {/* When the URL is exacty "/" (the home page), show this text */}
        <Route path="/" element={<p>Welcome to the Home Page! Tools will go here.</p>} />

        {/* We will add more routes here later, like: */}
        {/* <Route path="/qr-code" element={<QRCodeGenerator />} /> */}
      </Routes>
    </div>
  )
}
