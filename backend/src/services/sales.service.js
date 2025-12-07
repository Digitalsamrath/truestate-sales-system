const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

async function getSalesPage({ page = 1, limit = 10, search = '' }) {
  const results = [];
  let total = 0;

  const normalizedSearch = search.toLowerCase();

  const dataDir = path.join(__dirname, '../data');
  const csvFile = fs.readdirSync(dataDir).find(file => file.endsWith('.csv'));

  if (!csvFile) {
    throw new Error('CSV file not found');
  }

  const filePath = path.join(dataDir, csvFile);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        // --- SEARCH LOGIC ---
        const customerName = (row['Customer Name'] || '').toLowerCase();
        const phoneNumber = (row['Phone Number'] || '').toLowerCase();

        const matchesSearch =
          !normalizedSearch ||
          customerName.includes(normalizedSearch) ||
          phoneNumber.includes(normalizedSearch);

        if (!matchesSearch) return;

        // --- PAGINATION LOGIC ---
        if (total >= startIndex && total < endIndex) {
          results.push(row);
        }

        total++;
      })
      .on('end', () => {
        resolve({
          total,
          results,
        });
      })
      .on('error', reject);
  });
}

module.exports = {
  getSalesPage,
};
