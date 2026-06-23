import { useState } from 'react'

export default function AgeCalculator() {
    // 1. STATE
    // We need to store the birthdate the user picks, and the result we calculate.
    const [birthDate, setBirthDate] = useState('')
    const [ageText, setAgeText] = useState('')

    // 2. THE FUNCTION
    const calculateAge = () => {
        // If they didn't pick a date, show a warning
        if (!birthDate) {
            setAgeText('Please select a date first!')
            return
        }

        // Convert their text input into actual JavaScript Date objects
        const today = new Date()
        const bDay = new Date(birthDate)

        // Calculate the difference in years
        let age = today.getFullYear() - bDay.getFullYear()
        const monthDiff = today.getMonth() - bDay.getMonth()

        // If their birthday hasn't happened yet this year, subtract 1 from the age
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < bDay.getDate())) {
            age--;
        }



        setAgeText(`You are ${age} years old!`)
    }

    // 3. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Age Calculator</h2>

            <div style={{ marginBottom: '20px' }}>
                <label>Select your birth date: </label>
                {/* type="date" automatically gives us a calendar picker in the browser! */}
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    style={{ padding: '8px', marginLeft: '10px' }}
                />
            </div>

            <button
                onClick={calculateAge}
                style={{ padding: '10px 20px', background: '#1e1e2f', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Calculate Age
            </button>

            {/* Only show the result box if ageText is not empty */}
            {ageText && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '5px' }}>
                    <strong>{ageText}</strong>
                </div>
            )}
        </div>
    )
}
