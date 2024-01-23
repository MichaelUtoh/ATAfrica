const mongoose = require('mongoose');
const PortfolioModel = require('../models/portfolios');
var cors = require('cors')

const PortfolioController = {
    getPortfolioByRiskScore: async (req, res) => {
        const score = req.params.risk_score;

        try {
            await mongoose.connect(process.env.MONGODB_URI);
            const portfolio = await PortfolioModel.find({ risk_score: score });
            if (!portfolio) {
                return res.status(404).json({ error: 'Portfolio not found' });
            }
            res.status(200).json(portfolio);
        } catch (error) {
            console.error('Error fetching Portfolio by Risk Score/Tolerance:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } finally {
            mongoose.connection.close();
        }
    },

    getPortfolios: cors(), async function(req, res) {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

            const portfolios = await PortfolioModel.find()
                .select()
                .skip(skip)
                .limit(limit);

            const count = await PortfolioModel.countDocuments();
            res.status(200).json({
                portfolios,
                count,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            });
        } catch (error) {
            console.error('Error fetching portfolios:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } finally {
            mongoose.connection.close();
        }
    }
};

module.exports = PortfolioController;