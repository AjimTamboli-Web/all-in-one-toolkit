import { useState } from 'react'

// 1. We import the QR Code drawer from the library we just downloaded!
import { QRCodeSVG } from 'qrcode.react'

export default function QRCodeGenerator() {
    // 2. STATE
    // We only need one piece of state: whatever the user types into the box
    const [text, setText] = useState('')

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>QR Code Generator</h2>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter a website link or text..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ padding: '10px', width: '300px', borderRadius: '4px', border: '1px solid #999' }}
                />
            </div>

            {/* 
        3. CONDITIONAL RENDERING 
        This is a common React trick: { condition ? (do this if true) : (do this if false) }
      */}
            {text ? (
                // If there IS text, draw the QR code
                <div style={{ background: 'white', padding: '20px', display: 'inline-block', borderRadius: '8px' }}>
                    <QRCodeSVG value={text} size={200} />
                </div>
            ) : (
                // If the text is EMPTY, show this message
                <p style={{ color: '#888' }}>Type something above to generate a QR code!</p>
            )}
        </div>
    )
}
