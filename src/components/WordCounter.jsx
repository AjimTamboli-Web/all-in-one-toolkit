// 1. We import 'useState' from React. This is the magic that lets our app "remember" things (like what you typed).
import { useState } from 'react'

// 2. We export our component function
export default function WordCounter() {

    // 3. This is our STATE. 
    // 'text' is the current value. 'setText' is the function we use to change the value.
    // We start it as an empty string ('').
    const [text, setText] = useState('')

    // 4. We calculate things based on the text. 
    // If text is empty, length is 0.
    const charCount = text.length

    // We split the text by spaces to count words, but if it's empty, we say 0.
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length

    // 5. We return the HTML that we want the user to see
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Word & Character Counter</h2>

            {/* 
        This is a text area. 
        value={text} makes it show our state.
        onChange triggers every time you type a letter, and updates our state.
      */}
            <textarea
                rows="6"
                style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
                placeholder="Type or paste your text here..."
                value={text}
                onChange={(event) => setText(event.target.value)}
            />

            <div style={{ display: 'flex', gap: '20px', fontWeight: 'bold' }}>
                <p>Characters: {charCount}</p>
                <p>Words: {wordCount}</p>
            </div>
        </div>
    )
}
