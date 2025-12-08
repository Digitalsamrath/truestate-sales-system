const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'http://localhost:4000';

export async function fetchSales(params) {
  const query = new URLSearchParams(params).toString();

  const response = await fetch(
    `${API_BASE_URL}/api/sales?${query}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch sales data');
  }

  return response.json();
}
