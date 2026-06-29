import { useState } from 'react'

export default function ResumeBuilder() {
    // 1. STATE - Tracking all the resume details
    const [name, setName] = useState('John Doe')
    const [email, setEmail] = useState('john@example.com')
    const [phone, setPhone] = useState('(555) 123-4567')
    const [summary, setSummary] = useState('A passionate professional looking to build great things.')

    const [experience, setExperience] = useState('Software Engineer at TechCorp (2020 - Present)\n- Built awesome web apps\n- Fixed lots of bugs')
    const [education, setEducation] = useState('University of State\nBachelor of Science in Computer Science (2016 - 2020)')
    const [skills, setSkills] = useState('JavaScript, React, HTML, CSS')

    // 2. PRINT FUNCTION
    const handlePrint = () => {
        // This tells the browser to open the print dialog (where they can choose "Save as PDF")
        window.print()
    }

    // 3. THE UI
    return (
        <div style={{ padding: '20px', margin: '20px' }}>

            {/* 
        This is a CSS trick! 
        When the user prints the page, it hides anything with the class "no-print".
        This way, the ugly form inputs disappear and only the resume shows up in the PDF!
      */}
            <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          nav { display: none !important; } /* Hides your App.jsx sidebar */
        }
      `}</style>

            {/* HEADER SECTION */}
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Resume Builder</h2>
                <button
                    onClick={handlePrint}
                    style={{ padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Print / Save as PDF
                </button>
            </div>

            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>

                {/* --- LEFT SIDE: THE FORM --- */}
                {/* Notice we added the "no-print" class here! */}
                <div className="no-print" style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <h3>Edit Details</h3>

                    <div>
                        <label>Full Name:</label><br />
                        <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ flex: 1 }}>
                            <label>Email:</label><br />
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label>Phone:</label><br />
                            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div>
                        <label>Professional Summary:</label><br />
                        <textarea value={summary} onChange={e => setSummary(e.target.value)} rows="3" style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }} />
                    </div>

                    <div>
                        <label>Experience:</label><br />
                        <textarea value={experience} onChange={e => setExperience(e.target.value)} rows="5" style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }} />
                    </div>

                    <div>
                        <label>Education:</label><br />
                        <textarea value={education} onChange={e => setEducation(e.target.value)} rows="4" style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }} />
                    </div>

                    <div>
                        <label>Skills (comma separated):</label><br />
                        <textarea value={skills} onChange={e => setSkills(e.target.value)} rows="2" style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }} />
                    </div>
                </div>

                {/* --- RIGHT SIDE: LIVE PREVIEW --- */}
                {/* We give this a white background and black text so it looks like a piece of paper */}
                <div style={{ flex: 2, minWidth: '400px', background: 'white', color: 'black', padding: '40px', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

                    {/* Resume Header */}
                    <div style={{ textAlign: 'center', borderBottom: '2px solid #333', paddingBottom: '20px', marginBottom: '20px' }}>
                        <h1 style={{ margin: '0 0 10px 0', color: '#333' }}>{name || 'Your Name'}</h1>
                        <p style={{ margin: 0, color: '#666' }}>
                            {email} {email && phone ? ' | ' : ''} {phone}
                        </p>
                    </div>

                    {/* Resume Summary */}
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ margin: 0, fontStyle: 'italic', color: '#444' }}>{summary}</p>
                    </div>

                    {/* Resume Experience */}
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', color: '#333' }}>Experience</h3>
                        {/* The whiteSpace: 'pre-wrap' rule allows the textarea's line breaks to show up correctly! */}
                        <div style={{ whiteSpace: 'pre-wrap', color: '#444' }}>{experience}</div>
                    </div>

                    {/* Resume Education */}
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', color: '#333' }}>Education</h3>
                        <div style={{ whiteSpace: 'pre-wrap', color: '#444' }}>{education}</div>
                    </div>

                    {/* Resume Skills */}
                    <div>
                        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', color: '#333' }}>Skills</h3>
                        <div style={{ color: '#444' }}>{skills}</div>
                    </div>

                </div>

            </div>
        </div>
    )
}
