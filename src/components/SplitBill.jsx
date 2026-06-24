import { useState } from 'react'

export default function SplitBill() {
    // 1. STATE
    // We need three inputs from the user
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0) // Tip percentage
    const [people, setPeople] = useState(1)

    // 2. MATH CALCULATIONS (No button needed!)
    // React re-runs these calculations instantly every time a state changes.

    // First, we force the inputs to be Numbers (just in case they act like text strings)
    const billAmount = Number(bill)
    const tipPercentage = Number(tip)
    const numberOfPeople = Number(people)

    // Then, we do the math
    const tipAmount = (billAmount * tipPercentage) / 100
    const totalAmount = billAmount + tipAmount
    // Prevent dividing by zero if they delete the number of people
    const amountPerPerson = numberOfPeople > 0 ? totalAmount / numberOfPeople : 0

    // 3. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Split the Bill Calculator</h2>

            {/* INPUTS AREA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px' }}>

                <div>
                    <label>Total Bill ($):</label>
                    <br />
                    <input
                        type="number"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }}
                    />
                </div>

                <div>
                    <label>Tip Percentage (%):</label>
                    <br />
                    <input
                        type="number"
                        value={tip}
                        onChange={(e) => setTip(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }}
                    />
                </div>

                <div>
                    <label>Number of People:</label>
                    <br />
                    <input
                        type="number"
                        min="1"
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }}
                    />
                </div>

            </div>

            {/* RESULTS DISPLAY */}
            <div style={{ marginTop: '25px', padding: '15px', background: '#1e1e2f', color: 'white', borderRadius: '8px' }}>
                {/* .toFixed(2) ensures it always shows 2 decimal places like money ($10.50) */}
                <p>Tip Amount: <strong>${tipAmount.toFixed(2)}</strong></p>
                <p>Total with Tip: <strong>${totalAmount.toFixed(2)}</strong></p>

                <h3 style={{ borderTop: '1px solid #444', paddingTop: '10px' }}>
                    Each Person Pays: <span style={{ color: '#00ff88' }}>${amountPerPerson.toFixed(2)}</span>
                </h3>
            </div>
        </div>
    )
}
