function SearchBar({ onSearch }) {
  return (
    <div className="card">
      <input
        type="text"
        placeholder="🔍 Search customer name or phone number"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
