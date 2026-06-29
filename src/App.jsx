// 1. Import Routes and Route from the router library
// 20. Notice we added 'Link' to our import here!
import { Routes, Route, Link } from 'react-router-dom'

// 11. IMPORT YOUR NEW COMPONENT
// The './' means "look in the current folder, then go to components folder"
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

// 2. Export our App function as the default export so main.jsx can use it
export default function App() {
  return (
    <div style={{
      display: 'flex', minHeight: '100vh',
      fontFamily: 'sans-serif'
    }}>


      {/* 21. --- THIS IS OUR SIDEBAR NAVIGATION --- */}
      <nav style={{ width: '250px', background: '#1e1e2f', color: 'white', padding: '20px' }}>
        <h2>Toolkit Pro</h2>

        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li>
            {/* Link replaces the standard HTML <a> tag */}
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🏠 Home</Link>
          </li>
          <li>
            <Link to="/word-counter" style={{ color: 'white', textDecoration: 'none' }}>📝 Word Counter</Link>
          </li>
          <li>
            <Link to="/password-generator" style={{ color: 'white', textDecoration: 'none' }}> 🔐 Password Generator </Link>
          </li>
          <li>
            <Link to="/age-calculator" style={{ color: 'white', textDecoration: 'none' }}> 👶 Age Calculator </Link>
          </li>
          <li>
            <Link to="/qr-code" style={{ color: 'white', textDecoration: 'none' }}> QR CODE Generator</Link>
          </li>
          <li>
            <Link to="/split-bill" style={{ color: 'white', textDecoration: 'none' }}> Split Bill</Link>
          </li>
          <li>
            <Link to="/emi-calculator" style={{ color: 'white', textDecoration: 'none' }}> EMI Calculator </Link>
          </li>
          <li>
            <Link to="/color-palette" style={{ color: 'white', textDecoration: 'none' }}> Color Palette</Link>
          </li>
          <li>
            <Link to="/unit-converter" style={{ color: 'white', textDecoration: 'none' }}> Unit Converter</Link>
          </li>
          <li>
            <Link to="/json-formatter" style={{ color: 'white', textDecoration: 'none' }}> JSON Formatter</Link>
          </li>
          <li>
            <Link to="/meta-tag-generator" style={{ color: 'white', textDecoration: 'none' }}> Meta Tag Generator</Link>
          </li>
          <li>
            <Link to="/invoice-gst" style={{ color: 'white', textDecoration: 'none' }}> Invoice & GST Calculator</Link>
          </li>
          <li>
            <Link to="/image-compressor" style={{ color: 'white', textDecoration: 'none' }}>Image Compressor</Link>
          </li>
          <li>
            <Link to="/pdf-merger" style={{ color: 'white', textDecoration: 'none' }}>PDF Merger</Link>
          </li>
          <li>
            <Link to="/resume-builder" style={{ color: 'white', textDecoration: 'none' }}>Resume Builder</Link>
          </li>
        </ul>
      </nav>

      {/* 22--- THIS IS OUR MAIN CONTENT AREA --- */}
      <main style={{ flex: 1, padding: '40px', background: '#f5f5f5' }}>

        {/* 
        Routes acts like a switch statement. 
        It looks at the URL in the browser and decides what to show.
      */}
        <Routes>
          {/* When the URL is exacty "/" (the home page), show this text */}

          <Route path="/" element={
            <div>
              <h1> Welcome to the Home Page!</h1>
              <p> Click a tool on the left to get started.</p>
            </div>
          } />

          {/* We will add more routes here later, like: */}
          {/* <Route path="/qr-code" element={<QRCodeGenerator />} /> */}


          {/* 12. ADD THE ROUTE */}
          {/* When the user goes to /word-counter in their browser, React will show the WordCounter component! */}
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
  )
}
