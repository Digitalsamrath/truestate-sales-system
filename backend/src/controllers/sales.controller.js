const salesService = require('../services/sales.service');

async function getSales(req, res) {
  try {
    const data = await salesService.getSales({
      page: req.query.page,
      search: req.query.search,
      region: req.query.region,
      gender: req.query.gender,
      ageMin: req.query.ageMin,
      ageMax: req.query.ageMax,
      category: req.query.category,
      tags: req.query.tags,
      payment: req.query.payment,
      dateFrom: req.query.dateFrom,
      dateTo: req.query.dateTo,
      sortBy: req.query.sortBy, // 'date' | 'quantity' | 'customerName'
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: 'Failed to fetch sales data',
      error: err.message,
    });
  }
}

module.exports = {
  getSales,
};
