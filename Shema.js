const mongoose = require('./MongoDb');
const DropDownData = require('./DroppDownData');
const InnerHeaderDataValues = require('./InnderHeaderData')

// Define a Mongoose model for DropDownData
const DropDownModel = mongoose.model('Dropdown', {
    id: Number,
    name: String,
});

// Define a route to handle only POST requests for the /api/dropdown endpoint
exports.postDropDownData = async (req, res) => {
    try {
        // Assuming req.body contains the data you want to save
        const newData = DropDownData;

        // Save the new data to MongoDB using the DropDownModel
        const result = await DropDownModel.create(newData);

        res.json(result);
    } catch (error) {
        console.error('Error posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getDropDownData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the DropDownModel
        const dataFromMongoDB = await DropDownModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/dropdown:', error);
        res.status(500).send('Internal Server Error');
    }
}

// for inner header
const InnderHeaderModel = mongoose.model('InnerHeader', {
    id: Number,
    name: String,
    value: Number,
});

// Define a route to haldle only POST request for /api/innerheader
exports.postInnerHeaderData = async (req, res) => {
    try {
        const newData = InnerHeaderDataValues;
        const result = await InnderHeaderModel.create(newData);

        res.json(result);
    } catch (error) {
        console.error('Error posting data to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getInnerHeaderData = async (req, res) => {
    try {
        // Retrieve all documents from the MongoDB collection associated with the DropDownModel
        const dataFromMongoDB = await InnderHeaderModel.find();

        // Send the retrieved data as the response
        res.json(dataFromMongoDB);
    } catch (error) {
        console.error('Error fetching data from MongoDB for /api/dropdown:', error);
        res.status(500).send('Internal Server Error');
    }
}