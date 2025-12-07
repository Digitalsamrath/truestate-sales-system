const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('Backend is running ✅');
});

// Temporary sales API (dummy data)
app.get('/api/sales', (req, res) => {
  res.json({
    total: 1,
    results: [
      {
        customerId: 'CUST001',
        customerName: 'Test Customer',
        phoneNumber: '9999999999',
        productName: 'Sample Product',
        quantity: 1,
        finalAmount: 1000,
        date: '2025-01-01'
      }
    ]
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
