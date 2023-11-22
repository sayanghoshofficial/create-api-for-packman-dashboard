const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('./MongoDb');
const {
    postDropDownData,
    postInnerHeaderData,
    getDropDownData,
    getInnerHeaderData,
} = require('./Shema/ShemaForDropdownAndInnerHeader');
const { postCostData, getCostData } = require('./Shema/ShemaForCost');
const { postInventoryData, getInventoryData } = require('./Shema/ShemaForInventory');
const { postMonitoringData, getMonitoringData } = require('./Shema/ShemaForMonitoring');
const { postUtilizationData, getUtilizationData } = require('./Shema/ShemaForUtilization');
const { postStorageData, getStorageData } = require('./Shema/ShemaForStorage');
const port = 4000;

app.use(cors());
app.use(express.json());




// Define a route to serve the DropDownData
app.get('/api/dropdown', getDropDownData);

app.get('/api/innerheaderdata', getInnerHeaderData);

app.get('/api/cost', getCostData);

app.get('/api/inventory', getInventoryData);

app.get('/api/monitoring', getMonitoringData);

app.get('/api/utilization', getUtilizationData);

app.get('/api/storage', getStorageData);

// Use the postDropDownData function for handling POST requests to /api/dropdown
// app.post('/api/dropdown', postDropDownData);

// Use the postDropDownData function for handling POST requests to /api/dropdown
// app.post('/api/innerheaderdata', postInnerHeaderData);

// app.post('/api/cost', postCostData);

// app.post('/api/inventory', postInventoryData);

// app.post('/api/monitoring', postMonitoringData);

// app.post('/api/utilization', postUtilizationData);

// app.post('/api/storage', postStorageData);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
