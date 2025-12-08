const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function loadSalesData() {
  return new Promise((resolve, reject) => {
    const results = [];

    const dataDir = path.join(__dirname, '../data');
    const files = fs.readdirSync(dataDir);
    const csvFile = files.find(file => file.endsWith('.csv'));

    if (!csvFile) {
      return reject(new Error('No CSV file found in data folder'));
    }

    const filePath = path.join(dataDir, csvFile);

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

module.exports = {
  loadSalesData,
};
