const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Defining and using routes

const tempRoute = require('./routes/tempRoute');


app.use('/api/temp', tempRoute);


module.exports = app;