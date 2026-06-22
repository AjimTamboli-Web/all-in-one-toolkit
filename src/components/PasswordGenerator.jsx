import { useState } from 'react'

export default function PasswordGenerator() {
    // 1. STATE
    // 'password' holds the generated text
    const [password, setPassword] = useState('')
    // 'length' holds the slider value (starts at 12)
    const [length, setLength] = useState(12)

    // 2. THE FUNCTION THAT DOES THE WORK
    // This runs ONLY when the user clicks the "Generate" button
    const generatePassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
        let newPassword = ''

        // A loop that picks random characters until it hits our chosen length
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length)
            newPassword += chars[randomIndex]
        }

        // Update the state with the new password!
        setPassword(newPassword)
    }

    // 3. WHAT THE USER SEES
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Password Generator</h2>

            {/* Our generated password shows up here */}
            <div style={{ padding: '15px', background: '#e0e0e0', fontSize: '20px', letterSpacing: '2px', marginBottom: '15px' }}>
                {password || 'Click Generate...'}
            </div>

            {/* A slider to choose the length */}
            <div style={{ marginBottom: '20px' }}>
                <label>Length: {length}</label>
                <br />
                <input
                    type="range"
                    min="6"
                    max="32"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>

            {/* The button that triggers our function */}
            <button
                onClick={generatePassword}
                style={{ padding: '10px 20px', background: '#1e1e2f', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Generate Password
            </button>
        </div>
    )
}
