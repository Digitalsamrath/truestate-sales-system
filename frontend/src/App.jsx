import { useEffect, useState } from 'react';

function App() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://truestate-sales-system.onrender.com/api/sales')
      .then(res => res.json())
      .then(data => {
        setSales(data.results || []);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: 'Arial' }}>
      <h1>Retail Sales Management System</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {sales.map((item, index) => (
            <li key={index}>
              {item.customerName} — {item.productName} — ₹{item.finalAmount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
