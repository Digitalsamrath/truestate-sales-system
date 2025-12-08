function Pagination({ page, total, pageSize, onPrev, onNext }) {
  return (
    <div className="card pagination">
      <button className="button button-secondary" disabled={page === 1} onClick={onPrev}>
        ← Previous
      </button>

      <span>
        Page <strong>{page}</strong>
      </span>

      <button className="button" disabled={page * pageSize >= total} onClick={onNext}>
        Next →
      </button>
    </div>
  );
}

export default Pagination;
