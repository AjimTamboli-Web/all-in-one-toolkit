import { useState } from 'react'

export default function ColorPalette() {
    // 1. STATE
    // We want to store a list (Array) of 5 colors. We start with some nice defaults.
    const [colors, setColors] = useState(['#1e1e2f', '#00ff88', '#6366f1', '#ff3366', '#f5f5f5'])
    // We keep track of which color was just copied so we can show a temporary "Copied!" message
    const [copiedColor, setCopiedColor] = useState('')

    // 2. HELPER FUNCTION: Generates ONE random HEX color (e.g., #A3F912)
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    // 3. MAIN ACTION: Loops 5 times to create a whole new palette
    const generateNewPalette = () => {
        const newColors = []
        for (let i = 0; i < 5; i++) {
            newColors.push(getRandomColor())
        }
        setColors(newColors)
        setCopiedColor('') // Clear any old "copied" message
    }

    // 4. COPY ACTION: Copies the text to the user's clipboard
    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color) // This is the browser's copy command!
        setCopiedColor(color) // Remember which one we copied

        // Hide the "Copied!" message after 2 seconds (2000 milliseconds)
        setTimeout(() => {
            setCopiedColor('')
        }, 2000)
    }

    // 5. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Color Palette Generator</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>Click a color box to copy its HEX code!</p>

            {/* This holds our 5 color boxes side-by-side */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '25px' }}>

                {/* We use .map() to loop through our array of colors and draw a box for each one */}
                {colors.map((color, index) => (
                    <div
                        key={index} // React needs a unique 'key' when we loop
                        onClick={() => copyToClipboard(color)}
                        style={{
                            backgroundColor: color,
                            width: '120px',
                            height: '120px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                    >
                        {/* If this is the color they just clicked, show "Copied!", otherwise show the color code */}
                        <span style={{
                            background: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}>
                            {copiedColor === color ? 'Copied!' : color}
                        </span>
                    </div>
                ))}

            </div>

            <button
                onClick={generateNewPalette}
                style={{ padding: '10px 20px', background: '#1e1e2f', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px', fontSize: '16px' }}
            >
                Generate New Palette
            </button>
        </div>
    )
}
