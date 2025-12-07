const salesService = require('../services/sales.service');

async function getSales(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const search = req.query.search || '';
    const limit = 10;

    const data = await salesService.getSalesPage({
      page,
      limit,
      search,
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: 'Failed to load sales data',
      error: err.message,
    });
  }
}

module.exports = {
  getSales,
};
