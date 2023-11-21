const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('./MongoDb');
const {
    postDropDownData,
    postInnerHeaderData,
    getDropDownData,
    getInnerHeaderData,
} = require('./Shema');
const port = 4000;

app.use(cors());
app.use(express.json());

// Import the DropDownData module
const DropDownData = require('./DroppDownData');
const InnerHeaderDataValues = require('./InnderHeaderData');



// Define a route to serve the DropDownData
app.get('/api/dropdown', getDropDownData);

app.get('/api/innerheaderdata', getInnerHeaderData);

// Use the postDropDownData function for handling POST requests to /api/dropdown
app.post('/api/dropdown', postDropDownData);

// Use the postDropDownData function for handling POST requests to /api/dropdown
app.post('/api/innerheaderdata', postInnerHeaderData);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
