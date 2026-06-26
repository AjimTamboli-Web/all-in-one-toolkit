import { useState } from 'react'

export default function MetaTagGenerator() {
    // 1. STATE - Tracking all the inputs
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [keywords, setKeywords] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    // 2. THE LOGIC - Building the big HTML string
    // Notice we use backticks ( ` ) instead of normal quotes!
    // ${title || 'Page Title'} means: If 'title' is empty, use 'Page Title' as the default.
    const generatedCode = `<!-- Primary Meta Tags -->
<title>${title || 'Page Title'}</title>
<meta name="title" content="${title || 'Page Title'}">
<meta name="description" content="${description || 'Description of your page'}">
<meta name="keywords" content="${keywords || 'keyword1, keyword2'}">
<meta name="author" content="${author || 'Author Name'}">

<!-- Open Graph / Facebook (For nice link previews) -->
<meta property="og:type" content="website">
<meta property="og:title" content="${title || 'Page Title'}">
<meta property="og:description" content="${description || 'Description of your page'}">
<meta property="og:image" content="${imageUrl || 'https://yoursite.com/image.jpg'}">`

    // 3. COPY FUNCTION
    const copyCode = () => {
        navigator.clipboard.writeText(generatedCode)
        alert("Copied to clipboard!") // We use a simple browser alert here
    }

    // 4. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Meta-Tag Generator</h2>
            <p style={{ color: '#666' }}>Generate SEO tags for your HTML &lt;head&gt; section.</p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>

                {/* INPUT FORM (Left Side) */}
                <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>

                    <div>
                        <label>Page Title:</label><br />
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={{ padding: '8px', width: '100%', border: '1px solid #999', borderRadius: '4px' }} placeholder="My Awesome Website" />
                    </div>

                    <div>
                        <label>Description:</label><br />
                        <textarea value={description} onChange={e => setDescription(e.target.value)} rows="3" style={{ padding: '8px', width: '100%', border: '1px solid #999', borderRadius: '4px' }} placeholder="A brief description for search engines..." />
                    </div>

                    <div>
                        <label>Keywords (comma separated):</label><br />
                        <input type="text" value={keywords} onChange={e => setKeywords(e.target.value)} style={{ padding: '8px', width: '100%', border: '1px solid #999', borderRadius: '4px' }} placeholder="tools, calculator, web" />
                    </div>

                    <div>
                        <label>Author:</label><br />
                        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} style={{ padding: '8px', width: '100%', border: '1px solid #999', borderRadius: '4px' }} placeholder="John Doe" />
                    </div>

                    <div>
                        <label>Image URL (For social previews):</label><br />
                        <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} style={{ padding: '8px', width: '100%', border: '1px solid #999', borderRadius: '4px' }} placeholder="https://example.com/cover.png" />
                    </div>

                </div>

                {/* OUTPUT BLOCK (Right Side) */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <label>Generated HTML:</label>
                    <div style={{ background: '#1e1e2f', color: '#00ff88', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', minHeight: '300px' }}>
                        {generatedCode}
                    </div>

                    <button onClick={copyCode} style={{ marginTop: '10px', padding: '10px 20px', background: '#444', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                        Copy Code
                    </button>
                </div>

            </div>
        </div>
    )
}
