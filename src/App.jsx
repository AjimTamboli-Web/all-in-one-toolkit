import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// Import icons for our Menu Bar
import { Menu, X } from 'lucide-react'

// Import all our tools
import Home from './components/Home'
import WordCounter from './components/WordCounter'
import PasswordGenerator from './components/PasswordGenerator'
import AgeCalculator from './components/AgeCalculator'
import QRCodeGenerator from './components/QRCodeGenerator'
import SplitBill from './components/SplitBill'
import EMICalculator from './components/EMICalculator'
import ColorPalette from './components/ColorPalette'
import UnitConverter from './components/UnitConverter'
import JSONFormatter from './components/JSONFormatter'
import MetaTagGenerator from './components/MetaTagGenerator'
import InvoiceGST from './components/InvoiceGST'
import ImageCompressor from './components/ImageCompressor'
import PDFMerger from './components/PDFMerger'
import ResumeBuilder from './components/ResumeBuilder'
import Footer from './components/Footer'

export default function App() {
  // STATE: Is the sidebar open or closed? (Starts closed)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // A helper function to close the sidebar whenever a link is clicked
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    // We changed this to flexDirection: 'column' so the header stays on top
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif' }}>

      {/* --- TOP MENU BAR --- */}
      <header style={{
        background: '#1e1e2f',
        color: 'white',
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Pushes the logo left, and our new link right
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>

        {/* Left Side: Hamburger Menu & Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* We wrapped the Logo in a <Link> so clicking it goes Home! */}
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h2 style={{ margin: 0, cursor: 'pointer' }}>Toolkit Pro</h2>
          </Link>
        </div>

        {/* Right Side: Quick Links (Like iLovePDF!) */}
        <div style={{ display: 'flex', gap: '20px', fontSize: '14px', fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
          <Link to="/pdf-merger" style={{ textDecoration: 'none', color: 'white' }}>PDF TOOLS</Link>
          <Link to="/image-compressor" style={{ textDecoration: 'none', color: 'white' }}>IMAGE TOOLS</Link>
        </div>

      </header>


      {/* --- MAIN LAYOUT WRAPPER --- */}
      <div style={{ display: 'flex', flex: 1, position: 'relative' }}>

        {/* --- SIDEBAR NAVIGATION --- */}
        <nav style={{
          width: '250px',
          background: '#1e1e2f',
          color: 'white',
          padding: '20px',
          position: 'absolute', // Makes it float over the content instead of pushing it
          top: 0,
          bottom: 0,
          left: isSidebarOpen ? '0' : '-250px', // The CSS magic that slides it in and out!
          transition: 'left 0.3s ease', // Smooth sliding animation
          zIndex: 90,
          boxShadow: isSidebarOpen ? '4px 0 10px rgba(0,0,0,0.2)' : 'none',
          overflowY: 'auto' // Lets you scroll if the list gets too long
        }}>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li><Link to="/" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>🏠 Home Dashboard</Link></li>
            <li><Link to="/word-counter" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>📝 Word Counter</Link></li>
            <li><Link to="/password-generator" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>🔐 Password Generator</Link></li>
            <li><Link to="/age-calculator" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>👶 Age Calculator</Link></li>
            <li><Link to="/qr-code" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>📲 QR Generator</Link></li>
            <li><Link to="/split-bill" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>🍕 Split Bill</Link></li>
            <li><Link to="/emi-calculator" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>🏦 EMI Calculator</Link></li>
            <li><Link to="/color-palette" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>🎨 Color Palette</Link></li>
            <li><Link to="/unit-converter" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>⚖️ Unit Converter</Link></li>
            <li><Link to="/json-formatter" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>{ } JSON Formatter</Link></li>
            <li><Link to="/meta-tag-generator" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>🏷️ Meta Tags</Link></li>
            <li><Link to="/invoice-gst" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>🧾 Invoice / GST</Link></li>
            <li><Link to="/image-compressor" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>🖼️ Image Compressor</Link></li>
            <li><Link to="/pdf-merger" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>📄 PDF Merger</Link></li>
            <li><Link to="/resume-builder" onClick={closeSidebar} style={{ color: 'white', textDecoration: 'none' }}>💼 Resume Builder</Link></li>
          </ul>
        </nav>

        {/* --- MAIN CONTENT AREA --- */}
        {/* By adding width: '100%', it takes up the full screen now! */}
        <main style={{ flex: 1, padding: '40px', background: '#f5f5f5', width: '100%', overflowX: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/word-counter" element={<WordCounter />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="/age-calculator" element={<AgeCalculator />} />
            <Route path="/qr-code" element={<QRCodeGenerator />} />
            <Route path="/split-bill" element={<SplitBill />} />
            <Route path="/emi-calculator" element={<EMICalculator />} />
            <Route path="/color-palette" element={<ColorPalette />} />
            <Route path="/unit-converter" element={<UnitConverter />} />
            <Route path="/json-formatter" element={<JSONFormatter />} />
            <Route path="/meta-tag-generator" element={<MetaTagGenerator />} />
            <Route path="/invoice-gst" element={<InvoiceGST />} />
            <Route path="/image-compressor" element={<ImageCompressor />} />
            <Route path="/pdf-merger" element={<PDFMerger />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
          </Routes>
        </main>

      </div>

      {/* --- FOOTER --- */}
      <Footer />

    </div>
  )
}
