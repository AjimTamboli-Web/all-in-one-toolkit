import { useState } from 'react'

export default function InvoiceGST() {
    // 1. STATE
    const [baseAmount, setBaseAmount] = useState(1000)
    const [gstRate, setGstRate] = useState(18) // Default GST rate is usually 18% in many places
    const [action, setAction] = useState('add') // Can be 'add' or 'remove'

    // 2. MATH CALCULATIONS
    const amount = Number(baseAmount)
    const rate = Number(gstRate)

    let gstAmount = 0
    let totalAmount = 0
    let originalCost = 0

    if (action === 'add') {
        // Adding GST to a base price (Exclusive GST)
        gstAmount = (amount * rate) / 100
        totalAmount = amount + gstAmount
        originalCost = amount
    } else {
        // Removing GST from a final price (Inclusive GST)
        // Formula: Original Cost = Total Amount / (1 + (Rate / 100))
        originalCost = amount / (1 + (rate / 100))
        gstAmount = amount - originalCost
        totalAmount = amount
    }

    // 3. THE UI
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
            <h2>Invoice & GST Calculator</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', marginTop: '20px' }}>

                {/* ADD OR REMOVE GST SELECTOR */}
                <div>
                    <label style={{ fontWeight: 'bold' }}>Action:</label><br />
                    <select
                        value={action}
                        onChange={e => setAction(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999', marginTop: '5px' }}
                    >
                        <option value="add">Add GST (Exclusive)</option>
                        <option value="remove">Remove GST (Inclusive)</option>
                    </select>
                </div>

                {/* AMOUNT INPUT */}
                <div>
                    <label style={{ fontWeight: 'bold' }}>Amount ($):</label><br />
                    <input
                        type="number"
                        value={baseAmount}
                        onChange={e => setBaseAmount(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999', marginTop: '5px' }}
                    />
                </div>

                {/* GST RATE SELECTOR */}
                <div>
                    <label style={{ fontWeight: 'bold' }}>GST Rate (%):</label><br />
                    <select
                        value={gstRate}
                        onChange={e => setGstRate(e.target.value)}
                        style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #999', marginTop: '5px' }}
                    >
                        <option value="3">3%</option>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                    </select>
                </div>

            </div>

            {/* RESULTS INVOICE */}
            <div style={{ marginTop: '30px', padding: '20px', background: '#1e1e2f', color: 'white', borderRadius: '8px', maxWidth: '400px' }}>
                <h3 style={{ borderBottom: '1px solid #555', paddingBottom: '10px', marginTop: 0 }}>Invoice Summary</h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Net Price:</span>
                    <span>${originalCost.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>GST Amount ({gstRate}%):</span>
                    <span style={{ color: '#ffcc00' }}>+ ${gstAmount.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', paddingTop: '15px', borderTop: '2px dashed #555', fontSize: '18px', fontWeight: 'bold' }}>
                    <span>Total Price:</span>
                    <span style={{ color: '#00ff88' }}>${totalAmount.toFixed(2)}</span>
                </div>
            </div>

        </div>
    )
}
