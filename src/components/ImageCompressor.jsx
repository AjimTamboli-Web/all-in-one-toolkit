
import { useState } from 'react'
// Import the magic library we just installed!
import imageCompression from 'browser-image-compression'

export default function ImageCompressor() {
    // 1. STATE
    // We need to keep track of the original file, the new file, and a loading state
    const [originalFile, setOriginalFile] = useState(null)
    const [compressedFile, setCompressedFile] = useState(null)
    const [isCompressing, setIsCompressing] = useState(false)

    // 2. UPLOAD HANDLER (When user picks a file)
    const handleUpload = (event) => {
        // Files in HTML are stored in an array. We grab the first one [0].
        const file = event.target.files[0]
        setOriginalFile(file)
        setCompressedFile(null) // Reset the old compressed file if they pick a new image
    }

    // 3. COMPRESS FUNCTION (Notice the "async" keyword. Compression takes time!)
    const compressImage = async () => {
        if (!originalFile) return

        setIsCompressing(true) // Turn on the loading text

        // Configuration for the library
        const options = {
            maxSizeMB: 1, // Target size: 1 Megabyte
            maxWidthOrHeight: 1920,
            useWebWorker: true // Makes it run faster without freezing the browser
        }

        try {
            // The magic happens here! "await" means we wait for it to finish.
            const compressed = await imageCompression(originalFile, options)
            setCompressedFile(compressed)
        } catch (error) {
            console.log(error)
            alert("Something went wrong while compressing!")
        }

        setIsCompressing(false) // Turn off the loading text
    }

    // 4. DOWNLOAD FUNCTION
    const downloadImage = () => {
        if (!compressedFile) return

        // This is a browser trick to force a file download
        const link = document.createElement('a')
        link.href = URL.createObjectURL(compressedFile)
        link.download = "compressed_" + compressedFile.name
        link.click() // Fake a click on the link!
    }

    // 5. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Image Compressor</h2>
            <p style={{ color: '#666' }}>Reduce the file size of your images instantly in your browser.</p>

            {/* FILE UPLOAD INPUT */}
            <div style={{ margin: '20px 0' }}>
                <input
                    type="file"
                    accept="image/*" // Only allow images
                    onChange={handleUpload}
                    style={{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', border: '1px solid #999', width: '100%', maxWidth: '300px' }}
                />
            </div>

            {/* CONDITIONAL UI: If an original file exists, show this block */}
            {originalFile && (
                <div style={{ margin: '20px 0', padding: '15px', background: '#e0e0e0', borderRadius: '8px', maxWidth: '300px' }}>
                    <h4>Original Image</h4>
                    <p>Size: {(originalFile.size / 1024 / 1024).toFixed(2)} MB</p>

                    <button
                        onClick={compressImage}
                        disabled={isCompressing}
                        style={{ padding: '10px 20px', background: '#1e1e2f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
                    >
                        {isCompressing ? 'Compressing...' : 'Compress Image'}
                    </button>
                </div>
            )}

            {/* CONDITIONAL UI: If the compressed file is ready, show this block */}
            {compressedFile && (
                <div style={{ margin: '20px 0', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '8px', maxWidth: '300px' }}>
                    <h4>Compressed Successfully! 🎉</h4>
                    <p>New Size: {(compressedFile.size / 1024 / 1024).toFixed(2)} MB</p>

                    <button
                        onClick={downloadImage}
                        style={{ padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
                    >
                        Download Image
                    </button>
                </div>
            )}

        </div>
    )
}
