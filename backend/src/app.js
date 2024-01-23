require('dotenv').config();

const connectDB = require('./config/database')
var cors = require('cors')
const express = require('express');
const handleExcelData = require('./script/saveExcelData');

const app = express();
const portfolioRoutes = require('./routes/portfolioRoutes');
const Portfolio = require('./models/portfolios');

app.use(cors({
    origin: 'http://localhost:8080'
}))
app.use(express.json());
app.options('/portfolios', cors())

// Database
connectDB();


let dbInitialized = false;

if (!dbInitialized) {
    console.log('Ready to load database');
    handleExcelData('data.xlsx', Portfolio)
}

app.get('', (req, res) => {
    res.status(200).json({ 'detail': 'ATAfrica API' })
});
app.use('/portfolios', portfolioRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
