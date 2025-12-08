import { useEffect, useState } from 'react';
import { fetchSales } from '../services/salesApi';

export function useSales() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadSales();
  }, [page, search, filters, sortBy]);

  async function loadSales() {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchSales({
        page,
        search,
        sortBy,
        ...filters,
      });

      setData(result.results);
      setTotal(result.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    total,
    page,
    loading,
    error,

    setPage,
    setSearch,
    setFilters,
    setSortBy,
  };
}
