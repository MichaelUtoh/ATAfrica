require('dotenv').config();

const connectDB = require('./config/database')
var cors = require('cors')
const express = require('express');
const handleExcelData = require('./script/saveExcelData');

const app = express();
const portfolioRoutes = require('./routes/portfolioRoutes');
const Portfolio = require('./models/portfolios');


// var corsOptions = {
//     origin: 'https://at-africa.vercel.app/http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(cors({ origin: true }));
app.use(express.json());
// app.options('*', cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

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
