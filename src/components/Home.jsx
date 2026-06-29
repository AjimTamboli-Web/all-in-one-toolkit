import { Link } from 'react-router-dom'
import {
    FileText, Key, Calendar, QrCode, Users, Calculator,
    Palette, Scale, Braces, Tags, Receipt, Image, FilePlus, Briefcase
} from 'lucide-react'

export default function Home() {
    // 1. ADDED DESCRIPTIONS TO EVERY TOOL!
    const tools = [
        { name: 'Word Counter', path: '/word-counter', icon: <FileText size={36} />, color: '#3b82f6', desc: 'Count characters, words, and paragraphs instantly.' },
        { name: 'Password Generator', path: '/password-generator', icon: <Key size={36} />, color: '#8b5cf6', desc: 'Create strong, secure passwords with one click.' },
        { name: 'Age Calculator', path: '/age-calculator', icon: <Calendar size={36} />, color: '#f59e0b', desc: 'Find out exactly how old you are in days and years.' },
        { name: 'QR Code Generator', path: '/qr-code', icon: <QrCode size={36} />, color: '#10b981', desc: 'Turn any text or URL into a scannable QR code.' },
        { name: 'Split Bill', path: '/split-bill', icon: <Users size={36} />, color: '#ec4899', desc: 'Easily divide restaurant bills among friends.' },
        { name: 'EMI Calculator', path: '/emi-calculator', icon: <Calculator size={36} />, color: '#ef4444', desc: 'Calculate your monthly loan and mortgage payments.' },
        { name: 'Color Palette', path: '/color-palette', icon: <Palette size={36} />, color: '#14b8a6', desc: 'Generate random HEX colors for your design projects.' },
        { name: 'Unit Converter', path: '/unit-converter', icon: <Scale size={36} />, color: '#6366f1', desc: 'Quickly convert between different measurements.' },
        { name: 'JSON Formatter', path: '/json-formatter', icon: <Braces size={36} />, color: '#84cc16', desc: 'Beautify and minify your JSON data easily.' },
        { name: 'Meta Tags', path: '/meta-tag-generator', icon: <Tags size={36} />, color: '#f43f5e', desc: 'Generate perfect SEO meta tags for your website.' },
        { name: 'Invoice / GST', path: '/invoice-gst', icon: <Receipt size={36} />, color: '#eab308', desc: 'Add or remove GST from prices instantly.' },
        { name: 'Image Compressor', path: '/image-compressor', icon: <Image size={36} />, color: '#06b6d4', desc: 'Reduce image file size without losing quality.' },
        { name: 'PDF Merger', path: '/pdf-merger', icon: <FilePlus size={36} />, color: '#a855f7', desc: 'Combine multiple PDF documents into a single file.' },
        { name: 'Resume Builder', path: '/resume-builder', icon: <Briefcase size={36} />, color: '#3b82f6', desc: 'Create a beautiful professional resume in minutes.' },
    ]

    return (
        <div style={{ padding: '0 20px', maxWidth: '1400px', margin: '0 auto' }}>

            {/* iLovePDF Style Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '60px', marginTop: '20px' }}>
                <h1 style={{ fontSize: '3rem', color: '#111', margin: '0 0 15px 0', fontWeight: 'bold' }}>
                    Every tool you need, in one place
                </h1>
                <p style={{ color: '#555', fontSize: '1.2rem', margin: 0, maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6' }}>
                    All your favorite developer and utility tools at your fingertips. 100% FREE and easy to use!
                    Calculate, format, convert, and compress with just a few clicks.
                </p>
            </div>

            {/* Grid Layout upgraded to use wider cards (minmax 280px) */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px'
            }}>

                {tools.map((tool, index) => (
                    <Link
                        key={index}
                        to={tool.path}
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            style={{
                                background: 'white',
                                border: '1px solid #eaeaea',
                                borderRadius: '8px',
                                padding: '30px 25px', // More padding
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start', // Aligns everything to the left side!
                                gap: '20px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                height: '100%',
                                boxSizing: 'border-box'
                            }}
                            // Hover effect: Adds a shadow and changes the border to match the icon color
                            onMouseOver={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)'
                                e.currentTarget.style.borderColor = tool.color
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.boxShadow = 'none'
                                e.currentTarget.style.borderColor = '#eaeaea'
                            }}
                        >

                            {/* Icon Container - Uses a neat trick to make the background a faded version of the icon color */}
                            <div style={{
                                color: tool.color,
                                background: `${tool.color}15`, // The "15" at the end adds 15% transparency to the hex code!
                                padding: '12px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {tool.icon}
                            </div>

                            {/* Text Container */}
                            <div>
                                <h3 style={{ margin: '0 0 8px 0', color: '#222', fontSize: '1.25rem', fontWeight: 'bold' }}>
                                    {tool.name}
                                </h3>
                                <p style={{ margin: 0, color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                    {tool.desc}
                                </p>
                            </div>

                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}
