const express = require('express');
const router = express.Router();
const PortfolioController = require("../controllers/portfolioController");

router.get('/', PortfolioController.getPortfolios);
router.get('/:risk_score', PortfolioController.getPortfolioByRiskScore);

module.exports = router;