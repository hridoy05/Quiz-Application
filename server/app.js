// express
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express();
// database
app.use(express.json());
app.use(cors());
app.use('/api/v1', authRoutes);
module.exports = app;
