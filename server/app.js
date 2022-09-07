// express
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const app = express();
// database
app.use(express.json());
app.use(cors());
app.use('/api/v1', authRoutes);
app.use('/api/v1', categoryRoutes);
module.exports = app;
