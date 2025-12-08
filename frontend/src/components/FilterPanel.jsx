import { useState } from "react";

function FilterPanel({ onApply }) {
  const [filters, setFilters] = useState({
    region: "",
    gender: "",
    ageRange: "",
    category: "",
    tags: "",
    payment: "",
    date: "",
    sortBy: "customerName",
  });

  function update(key, value) {
    setFilters(prev => ({ ...prev, [key]: value }));
  }

  function apply() {
    const cleaned = {};
    Object.keys(filters).forEach(k => {
      if (filters[k]) cleaned[k] = filters[k];
    });
    onApply(cleaned);
  }

  function reset() {
    const empty = {
      region: "",
      gender: "",
      ageRange: "",
      category: "",
      tags: "",
      payment: "",
      date: "",
      sortBy: "customerName",
    };
    setFilters(empty);
    onApply({});
  }

  return (
    <div className="filter-row">
      {/* Reset */}
      <button className="reset-btn" title="Reset filters" onClick={reset}>
        ⟳
      </button>

      <select onChange={e => update("region", e.target.value)}>
        <option value="">Customer Region</option>
        <option>North</option>
        <option>South</option>
        <option>East</option>
        <option>West</option>
      </select>

      <select onChange={e => update("gender", e.target.value)}>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select onChange={e => update("ageRange", e.target.value)}>
        <option value="">Age Range</option>
        <option>18–25</option>
        <option>26–40</option>
        <option>40+</option>
      </select>

      <select onChange={e => update("category", e.target.value)}>
        <option value="">Product Category</option>
        <option>Clothing</option>
        <option>Electronics</option>
      </select>

      <select onChange={e => update("tags", e.target.value)}>
        <option value="">Tags</option>
        <option>New</option>
        <option>Popular</option>
      </select>

      <select onChange={e => update("payment", e.target.value)}>
        <option value="">Payment Method</option>
        <option>Card</option>
        <option>UPI</option>
        <option>Cash</option>
      </select>

      <select onChange={e => update("date", e.target.value)}>
        <option value="">Date</option>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
      </select>

      {/* Spacer */}
      <div className="spacer" />

      {/* Sort */}
      <select onChange={e => update("sortBy", e.target.value)}>
        <option value="customerName">Sort: Customer Name (A–Z)</option>
        <option value="date">Sort: Date</option>
        <option value="quantity">Sort: Quantity</option>
      </select>

      <button className="button apply-btn" onClick={apply}>
        Apply
      </button>
    </div>
  );
}

export default FilterPanel;
