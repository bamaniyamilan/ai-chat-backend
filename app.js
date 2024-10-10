const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', chatRoutes);

module.exports = app;