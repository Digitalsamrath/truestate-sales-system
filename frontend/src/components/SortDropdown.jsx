function SortDropdown({ onChange }) {
  return (
    <div className="card">
      <select
        onChange={(e) => onChange(e.target.value)}
        style={{ width: 260 }}
      >
        <option value="">Sort By</option>
        <option value="date">Date (Newest First)</option>
        <option value="quantity">Quantity</option>
        <option value="customerName">Customer Name (A–Z)</option>
      </select>
    </div>
  );
}

export default SortDropdown;
