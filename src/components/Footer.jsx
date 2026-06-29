import { Link } from 'react-router-dom'
// We grab some social media and language icons from lucide-react!
import { Mail, MessageCircle, Share2, Camera, Code, Globe } from 'lucide-react'


export default function Footer() {
    return (
        // The main footer wrapper with that nice dark grey background
        <footer style={{ background: '#2c2e3a', color: '#f5f5f5', padding: '60px 40px 20px 40px', fontSize: '14px', marginTop: 'auto' }}>

            {/* 1. TOP SECTION: Columns of Links */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '40px',
                maxWidth: '1200px',
                margin: '0 auto',
                marginBottom: '60px'
            }}>

                {/* COLUMN 1: PRODUCT */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <h4 style={{ margin: 0, color: 'white', fontWeight: 'bold', fontSize: '16px' }}>PRODUCT</h4>
                    <Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Home</Link>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Features</span>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Pricing</span>
                    <Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Tools</Link>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>FAQ</span>
                </div>

                {/* COLUMN 2: RESOURCES */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <h4 style={{ margin: 0, color: 'white', fontWeight: 'bold', fontSize: '16px' }}>RESOURCES</h4>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Toolkit Desktop</span>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Toolkit Mobile</span>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Developers API</span>
                </div>

                {/* COLUMN 3: LEGAL */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <h4 style={{ margin: 0, color: 'white', fontWeight: 'bold', fontSize: '16px' }}>LEGAL</h4>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Privacy Policy</span>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Terms & Conditions</span>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Cookies</span>
                </div>

                {/* COLUMN 4: COMPANY */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <h4 style={{ margin: 0, color: 'white', fontWeight: 'bold', fontSize: '16px' }}>COMPANY</h4>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>About Us</span>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Contact Us</span>
                    <span style={{ color: '#ccc', cursor: 'pointer' }}>Blog</span>
                </div>

            </div>

            {/* 2. BOTTOM SECTION: Language, Socials, Copyright */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                borderTop: '1px solid #444', // That thin grey line separator
                paddingTop: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px'
            }}>

                {/* Language Selector Fake Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #666', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
                    <Globe size={16} />
                    <span>English</span>
                </div>

                {/* Social Icons (Using generic icons since brands were removed) */}
                <div style={{ display: 'flex', gap: '20px', color: '#ccc' }}>
                    <Mail size={20} style={{ cursor: 'pointer' }} />
                    <MessageCircle size={20} style={{ cursor: 'pointer' }} />
                    <Share2 size={20} style={{ cursor: 'pointer' }} />
                    <Camera size={20} style={{ cursor: 'pointer' }} />
                    <Code size={20} style={{ cursor: 'pointer' }} />
                </div>

                {/* Copyright */}
                <div style={{ color: '#999' }}>
                    © Toolkit Pro 2026 ® - Your All-in-One Utility
                </div>

            </div>
        </footer>
    )
}
