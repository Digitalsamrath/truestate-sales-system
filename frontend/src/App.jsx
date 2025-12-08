import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import FilterPanel from './components/FilterPanel';
import StatCards from './components/StatCards';
import TransactionTable from './components/TransactionTable';
import Pagination from './components/Pagination';
import { useSales } from './hooks/useSales';

function App() {
  const {
    data,
    page,
    total,
    setPage,
    setSearch,
    setFilters,
  } = useSales();

  return (
    <div className="app">
      <Sidebar />

      <main>
        <Header onSearch={setSearch} />
        <FilterPanel onApply={(filters) => {
          setPage(1);
          setFilters(filters);
}} />
        <StatCards />
        <TransactionTable data={data} />

        <Pagination
          page={page}
          total={total}
          pageSize={10}
          onPrev={() => setPage(page - 1)}
          onNext={() => setPage(page + 1)}
        />
      </main>
    </div>
  );
}

export default App;
