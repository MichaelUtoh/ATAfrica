const mongoose = require('mongoose');
const XLSX = require('xlsx');

async function handleExcelData(filepath, model) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const workbook = XLSX.readFile(filepath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        const startingRowIndex = 1;
        const processedData = jsonData.slice(startingRowIndex);

        const values = [];
        const recordsToSave = processedData.map(row => (
            values.push(Object.values(row))
        ));

        for (let data of values) {
            await model.create({
                risk_score: data[0],
                nigerian_stocks: Math.round(data[1] * 100),
                foreign_stocks: Math.round(data[2] * 100),
                tech_stocks: Math.round(data[3] * 100),
                emerging_stocks: Math.round(data[4] * 100),
                nigerian_bonds: Math.round(data[5] * 100),
                foreign_bonds: Math.round(data[6] * 100),
                commodities: Math.round(data[7] * 100),
                real_estate: Math.round(data[8] * 100),
                t_bills: Math.round(data[9] * 100),
                alternative: Math.round(data[10] * 100),
            })
            console.log('Saved document successfully');
        }
    } catch (error) {
        console.error('Error processing Excel file: ', error);
    } finally {
        mongoose.connection.close();
    }
}

module.exports = handleExcelData;