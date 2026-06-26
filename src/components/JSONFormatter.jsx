import { useState } from 'react'

export default function JSONFormatter() {
    // 1. STATE
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [error, setError] = useState('') // We use this to show error messages to the user

    // 2. FORMAT FUNCTION
    const formatJSON = () => {
        // A "try/catch" block tries to do something dangerous that might break.
        try {
            // JSON.parse turns text into a real JavaScript Object. 
            // If the text isn't perfect JSON, this line will cause an ERROR and immediately jump to "catch".
            const parsed = JSON.parse(input)

            // JSON.stringify turns it back into text. The '2' at the end means "Add 2 spaces of indentation"
            const formatted = JSON.stringify(parsed, null, 2)

            setOutput(formatted)
            setError('') // Clear any old errors because it succeeded!

        } catch (err) {
            // If it broke, we end up here! We save the error message to our state.
            setError('Invalid JSON: ' + err.message)
            setOutput('')
        }
    }

    // 3. MINIFY FUNCTION (Squish everything onto one line)
    const minifyJSON = () => {
        try {
            const parsed = JSON.parse(input)
            // Without the '2', it removes all spaces and line breaks!
            const minified = JSON.stringify(parsed)

            setOutput(minified)
            setError('')
        } catch (err) {
            setError('Invalid JSON: ' + err.message)
            setOutput('')
        }
    }

    // 4. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>JSON Formatter</h2>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

                {/* INPUT BOX */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <label>Paste your JSON here:</label>
                    <textarea
                        rows="15"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={{ width: '100%', padding: '10px', fontFamily: 'monospace', borderRadius: '4px', border: '1px solid #999', marginTop: '10px' }}
                        placeholder='{"hello": "world"}'
                    />
                </div>

                {/* OUTPUT BOX (Read Only) */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <label>Result:</label>
                    <textarea
                        rows="15"
                        value={output}
                        readOnly
                        style={{ width: '100%', padding: '10px', fontFamily: 'monospace', borderRadius: '4px', border: '1px solid #999', marginTop: '10px', backgroundColor: '#2c50b1ff' }}
                    />
                </div>

            </div>

            {/* CONDITIONAL RENDERING FOR ERRORS */}
            {/* If 'error' is not empty, show this red text */}
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

            {/* BUTTONS */}
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button onClick={formatJSON} style={{ padding: '10px 20px', background: '#1e1e2f', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                    Format / Beautify
                </button>
                <button onClick={minifyJSON} style={{ padding: '10px 20px', background: '#444', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                    Minify
                </button>
            </div>

        </div>
    )
}
