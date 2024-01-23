require('dotenv').config();

const connectDB = require('./config/database')
const cors = require('cors')
const express = require('express');
const handleExcelData = require('./script/saveExcelData');

const app = express();
const portfolioRoutes = require('./routes/portfolioRoutes');
const Portfolio = require('./models/portfolios');

const whitelist = ['http://localhost:8080', 'https://at-africa-h5e62thgw-michaelutoh.vercel.app/'];
app.options('*', cors());

const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors(corsOptions))
app.use(express.json());

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
