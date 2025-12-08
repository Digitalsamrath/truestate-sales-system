function StatCards() {
  return (
    <div className="stats">
      <div className="stat-card">
        <span>Total units sold</span>
        <strong>10</strong>
      </div>

      <div className="stat-card">
        <span>Total Amount</span>
        <strong>₹89,000</strong>
        <small>(19 SRs)</small>
      </div>

      <div className="stat-card">
        <span>Total Discount</span>
        <strong>₹15,000</strong>
        <small>(45 SRs)</small>
      </div>
    </div>
  );
}

export default StatCards;
