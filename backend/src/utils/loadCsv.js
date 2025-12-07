const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function loadSalesData() {
  return new Promise((resolve, reject) => {
    const results = [];

    const filePath = path.join(__dirname, '../data/sales_data.csv');

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
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
