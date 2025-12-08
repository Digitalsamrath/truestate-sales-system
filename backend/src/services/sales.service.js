const { loadSalesData } = require('../utils/loadCsv');

let cachedSales = null;

async function ensureDataLoaded() {
  if (!cachedSales) {
    cachedSales = await loadSalesData();
  }
}

function parseList(value) {
  return value
    ? value
        .split(',')
        .map(v => v.trim().toLowerCase())
        .filter(Boolean)
    : [];
}

function applySearchAndFilters(data, params) {
  const {
    search = '',
    region,
    gender,
    category,
    tags,
    payment,
    ageMin,
    ageMax,
    dateFrom,
    dateTo,
  } = params;

  const searchTerm = (search || '').toLowerCase();
  const regions = parseList(region);
  const genders = parseList(gender);
  const categories = parseList(category);
  const tagList = parseList(tags);
  const payments = parseList(payment);

  const minAge = ageMin ? parseInt(ageMin) : null;
  const maxAge = ageMax ? parseInt(ageMax) : null;
  const fromDate = dateFrom ? new Date(dateFrom) : null;
  const toDate = dateTo ? new Date(dateTo) : null;

  return data.filter(row => {
    // Search: Customer Name / Phone Number
    const name = (row['Customer Name'] || '').toLowerCase();
    const phone = (row['Phone Number'] || '').toLowerCase();

    if (
      searchTerm &&
      !name.includes(searchTerm) &&
      !phone.includes(searchTerm)
    ) {
      return false;
    }

    // Region
    if (
      regions.length &&
      !regions.includes((row['Customer Region'] || '').toLowerCase())
    ) {
      return false;
    }

    // Gender
    if (
      genders.length &&
      !genders.includes((row['Gender'] || '').toLowerCase())
    ) {
      return false;
    }

    // Product Category
    if (
      categories.length &&
      !categories.includes((row['Product Category'] || '').toLowerCase())
    ) {
      return false;
    }

    // Tags (CSV may store tags like "Tag1|Tag2|Tag3")
    if (tagList.length) {
      const rowTags = (row['Tags'] || '')
        .split('|')
        .map(t => t.trim().toLowerCase())
        .filter(Boolean);

      if (!tagList.some(tag => rowTags.includes(tag))) {
        return false;
      }
    }

    // Payment Method
    if (
      payments.length &&
      !payments.includes((row['Payment Method'] || '').toLowerCase())
    ) {
      return false;
    }

    // Age Range
    const age = parseInt(row['Age']);
    if (!Number.isNaN(age)) {
      if (minAge !== null && age < minAge) return false;
      if (maxAge !== null && age > maxAge) return false;
    }

    // Date Range
    if (fromDate || toDate) {
      const saleDate = new Date(row['Date']);
      if (fromDate && saleDate < fromDate) return false;
      if (toDate && saleDate > toDate) return false;
    }

    return true;
  });
}

function applySorting(data, sortBy) {
  if (!sortBy) return data;

  const sorted = [...data];

  switch (sortBy) {
    case 'date':
      // Newest first
      sorted.sort((a, b) => {
        const da = new Date(a['Date']);
        const db = new Date(b['Date']);
        return db - da;
      });
      break;

    case 'quantity':
      sorted.sort((a, b) => {
        const qa = parseInt(a['Quantity']) || 0;
        const qb = parseInt(b['Quantity']) || 0;
        return qb - qa; // higher quantity first
      });
      break;

    case 'customerName':
      sorted.sort((a, b) => {
        const na = (a['Customer Name'] || '').toLowerCase();
        const nb = (b['Customer Name'] || '').toLowerCase();
        return na.localeCompare(nb); // A–Z
      });
      break;

    default:
      return data;
  }

  return sorted;
}

function paginate(data, page = 1, limit = 10) {
  const total = data.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const results = data.slice(startIndex, endIndex);
  return { total, results };
}

async function getSales(params) {
  const page = parseInt(params.page) || 1;
  const limit = 10; // fixed page size as per requirement

  await ensureDataLoaded();

  // 1) Search + filter
  let filtered = applySearchAndFilters(cachedSales, params);

  // 2) Sorting
  filtered = applySorting(filtered, params.sortBy);

  // 3) Pagination
  const { total, results } = paginate(filtered, page, limit);

  return {
    total,
    results,
    page,
    pageSize: limit,
  };
}

module.exports = {
  getSales,
};
