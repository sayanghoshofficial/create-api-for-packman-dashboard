const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// Import the DropDownData module
const DropDownData = require('./DroppDownData');

app.use(cors());
// Define a route to serve the DropDownData
app.get('/api/dropdown', (req, res) => {
    res.json(DropDownData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
