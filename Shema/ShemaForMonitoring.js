const mongoose = require('../MongoDb');
const dataForMonitoring = require('../Data/MonitoringData');


// Define a Mongoose model for Cost Data
const MonitoringDataModel = mongoose.model('Monitoring', {
    id: Number,
    value:Number
});

// Define a route to handle only POST request for the /api/inventory endpoint
exports.postMonitoringData = async (req, res) => {
    try {
        const newData = dataForMonitoring;

        const result = await MonitoringDataModel.create(newData);

        res.json(result);
    } catch (error) {
        console.log('Error Posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getMonitoringData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the CostDataModel
        const dataFromMongoDB = await MonitoringDataModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/dropdown:', error);
        res.status(500).send('Internal Server Error');
    }
}