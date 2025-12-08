function Header({ onSearch }) {
  return (
    <div className="header">
      <h2>Sales Management System</h2>

      <input
        className="search"
        placeholder="Name, Phone no."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Header;
