function TransactionTable({ data }) {
  if (!data.length) {
    return <p>No records found.</p>;
  }

  return (
    <div className="card">
      <table
        style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: 0,
          borderRadius: 8,
          overflow: 'hidden'
        }}
      >
        <thead>
          <tr style={{ background: '#eef2ff' }}>
            <th>Customer</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Region</th>
            <th>Product</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Payment</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row['Customer Name']}</td>
              <td>{row['Phone Number']}</td>
              <td>{row['Gender']}</td>
              <td>{row['Customer Region']}</td>
              <td>{row['Product Name']}</td>
              <td>{row['Product Category']}</td>
              <td>{row['Quantity']}</td>
              <td>{row['Payment Method']}</td>
              <td>{row['Date']}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        th, td {
          padding: 8px;
          border-bottom: 1px solid #e5e7eb;
          font-size: 13px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default TransactionTable;
