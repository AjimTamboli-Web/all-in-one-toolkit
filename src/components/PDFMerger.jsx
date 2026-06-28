
import { useState } from 'react'
// Import the PDF library we just downloaded
import { PDFDocument } from 'pdf-lib'

export default function PDFMerger() {
    // 1. STATE
    const [files, setFiles] = useState([]) // We start with an empty Array (list)
    const [isMerging, setIsMerging] = useState(false)
    const [mergedPdfUrl, setMergedPdfUrl] = useState(null)

    // 2. HANDLE UPLOAD
    // Notice we added the "multiple" attribute in the HTML below!
    const handleUpload = (event) => {
        // When the user uploads multiple files, the browser gives us a "FileList".
        // We convert it into a normal JavaScript Array so it's easier to work with.
        const uploadedFiles = Array.from(event.target.files)
        setFiles(uploadedFiles)
        setMergedPdfUrl(null) // Reset old merges
    }

    // 3. MERGE FUNCTION
    const mergePdfs = async () => {
        if (files.length < 2) {
            alert("Please upload at least 2 PDF files to merge!")
            return
        }

        setIsMerging(true)

        try {
            // Create a brand new, empty PDF document
            const mergedPdf = await PDFDocument.create()

            // A 'for loop' that goes through every single file the user uploaded
            for (let i = 0; i < files.length; i++) {
                const file = files[i]

                // Convert the uploaded file into raw computer data (binary)
                const arrayBuffer = await file.arrayBuffer()

                // Tell the library to read that raw data as a PDF
                const pdf = await PDFDocument.load(arrayBuffer)

                // Copy every single page from this PDF
                const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())

                // Add those copied pages to our new master PDF
                copiedPages.forEach((page) => {
                    mergedPdf.addPage(page)
                })
            }

            // Save the final master PDF back into raw computer data
            const mergedPdfBytes = await mergedPdf.save()

            // Create a temporary browser link to that data
            const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' })
            const url = URL.createObjectURL(blob)

            setMergedPdfUrl(url) // Save the URL so the user can download it!

        } catch (error) {
            console.log(error)
            alert("Something went wrong while merging. Make sure they are valid PDFs.")
        }

        setIsMerging(false)
    }

    // 4. UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>PDF Merger</h2>
            <p style={{ color: '#666' }}>Combine multiple PDF files into one.</p>

            {/* FILE UPLOAD */}
            <div style={{ margin: '20px 0' }}>
                <input
                    type="file"
                    accept="application/pdf"
                    multiple // This one word is what lets them pick multiple files!
                    onChange={handleUpload}
                    style={{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', border: '1px solid #999', width: '100%', maxWidth: '400px' }}
                />
            </div>

            {/* LIST THE UPLOADED FILES */}
            {/* files.length > 0 means: "If the list is not empty..." */}
            {files.length > 0 && (
                <div style={{ margin: '20px 0', padding: '15px', background: '#e0e0e0', borderRadius: '8px', maxWidth: '400px' }}>
                    <h4>Files to merge ({files.length}):</h4>
                    <ul style={{ paddingLeft: '20px' }}>
                        {/* .map() loops through our files and creates a bullet point for each one */}
                        {files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>

                    <button
                        onClick={mergePdfs}
                        disabled={isMerging}
                        style={{ padding: '10px 20px', background: '#1e1e2f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
                    >
                        {isMerging ? 'Merging...' : 'Merge PDFs'}
                    </button>
                </div>
            )}

            {/* SUCCESS DOWNLOAD LINK */}
            {mergedPdfUrl && (
                <div style={{ margin: '20px 0', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '8px', maxWidth: '400px' }}>
                    <h4>Merged Successfully! 🎉</h4>

                    {/* Instead of a button, we use a standard <a> link with the "download" attribute */}
                    <a
                        href={mergedPdfUrl}
                        download="Merged_Document.pdf"
                        style={{ display: 'inline-block', padding: '10px 20px', background: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px', marginTop: '10px' }}
                    >
                        Download Merged PDF
                    </a>
                </div>
            )}

        </div>
    )
}
