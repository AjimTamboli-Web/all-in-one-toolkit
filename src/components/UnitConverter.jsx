
import { useState } from 'react'

export default function UnitConverter() {
    // 1. STATE
    // We need to track the number typed, the "From" unit, and the "To" unit
    const [amount, setAmount] = useState(1)
    const [fromUnit, setFromUnit] = useState('meters')
    const [toUnit, setToUnit] = useState('feet')

    // 2. CONVERSION RATES (Our Dictionary)
    // This tells us how to convert exactly 1 of these units into Meters.
    // Example: 1 kilometer = 1000 meters. 1 foot = 0.3048 meters.
    const ratesToMeters = {
        meters: 1,
        kilometers: 1000,
        centimeters: 0.01,
        miles: 1609.34,
        feet: 0.3048,
        inches: 0.0254
    }

    // 3. MATH CALCULATIONS
    // Step A: Convert whatever the starting unit is into basic Meters
    const amountInMeters = Number(amount) * ratesToMeters[fromUnit]

    // Step B: Convert those Meters into the target "To" unit
    const finalResult = amountInMeters / ratesToMeters[toUnit]

    // 4. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Unit Converter (Length)</h2>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap', marginTop: '20px' }}>

                {/* INPUT BOX */}
                <div>
                    <label>Amount:</label><br />
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={{ padding: '8px', width: '120px', borderRadius: '4px', border: '1px solid #999' }}
                    />
                </div>

                {/* "FROM" DROPDOWN */}
                <div>
                    <label>From:</label><br />
                    <select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #999', cursor: 'pointer' }}
                    >
                        {/* Note: The 'value' must exactly match the names in our dictionary above! */}
                        <option value="meters">Meters</option>
                        <option value="kilometers">Kilometers</option>
                        <option value="centimeters">Centimeters</option>
                        <option value="miles">Miles</option>
                        <option value="feet">Feet</option>
                        <option value="inches">Inches</option>
                    </select>
                </div>

                <span style={{ fontSize: '24px', marginTop: '20px', color: '#666' }}>=</span>

                {/* "TO" DROPDOWN */}
                <div>
                    <label>To:</label><br />
                    <select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value)}
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #999', cursor: 'pointer' }}
                    >
                        <option value="meters">Meters</option>
                        <option value="kilometers">Kilometers</option>
                        <option value="centimeters">Centimeters</option>
                        <option value="miles">Miles</option>
                        <option value="feet">Feet</option>
                        <option value="inches">Inches</option>
                    </select>
                </div>

            </div>

            {/* RESULTS */}
            <div style={{ marginTop: '30px', padding: '20px', background: '#1e1e2f', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: '18px', color: '#aaa' }}>Result:</p>
                <h2 style={{ margin: '10px 0 0 0', color: '#00ff88', fontSize: '32px' }}>
                    {finalResult.toFixed(4)} <span style={{ fontSize: '18px', color: '#fff' }}>{toUnit}</span>
                </h2>
            </div>

        </div>
    )
}
