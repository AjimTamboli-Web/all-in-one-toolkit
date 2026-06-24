import { useState } from 'react'

export default function EMICalculator() {
    // 1. STATE
    const [principal, setPrincipal] = useState(10000)
    const [rate, setRate] = useState(5) // Annual interest rate percentage
    const [years, setYears] = useState(1)

    // 2. MATH CALCULATIONS
    // Convert our text inputs into real numbers
    const p = Number(principal)

    // The formula needs the MONTHLY interest rate, not annual
    const r = Number(rate) / 12 / 100

    // The formula needs the total number of MONTHS, not years
    const n = Number(years) * 12

    let emi = 0
    let totalPayment = 0
    let totalInterest = 0

    // The actual Bank EMI Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
    if (p > 0 && r > 0 && n > 0) {
        // Math.pow is JavaScript's way of doing Exponents (like "to the power of N")
        emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        totalPayment = emi * n
        totalInterest = totalPayment - p
    } else if (p > 0 && n > 0 && r === 0) {
        // Edge case: If the bank gives you a 0% interest rate!
        emi = p / n
        totalPayment = p
        totalInterest = 0
    }

    // 3. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>EMI / Loan Calculator</h2>

            {/* INPUTS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '350px' }}>
                <div>
                    <label>Loan Amount ($):</label>
                    <br />
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }}
                    />
                </div>

                <div>
                    <label>Annual Interest Rate (%):</label>
                    <br />
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }}
                    />
                </div>

                <div>
                    <label>Loan Tenure (Years):</label>
                    <br />
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999' }}
                    />
                </div>
            </div>

            {/* RESULTS DISPLAY */}
            <div style={{ marginTop: '25px', padding: '15px', background: '#1e1e2f', color: 'white', borderRadius: '8px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#00ff88' }}>Monthly EMI: ${emi.toFixed(2)}</h3>
                <p style={{ margin: '5px 0' }}>Total Interest: ${totalInterest.toFixed(2)}</p>
                <p style={{ margin: '5px 0' }}>Total Payment: ${totalPayment.toFixed(2)}</p>
            </div>
        </div>
    )
}
