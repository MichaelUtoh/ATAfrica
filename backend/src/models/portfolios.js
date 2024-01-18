const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
    {
        risk_score: { type: Number, required: true, unique: true },
        nigerian_stocks: { type: Number, required: true },
        foreign_stocks: { type: Number, required: true },
        tech_stocks: { type: Number, required: true },
        emerging_stocks: { type: Number, required: true },
        nigerian_bonds: { type: Number, required: true },
        foreign_bonds: { type: Number, required: true },
        commodities: { type: Number, required: true },
        real_estate: { type: Number, required: true },
        t_bills: { type: Number, required: true },
        alternative: { type: Number, required: true },
    }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;