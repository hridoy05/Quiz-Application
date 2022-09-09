// express
const express = require('express');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const quizRoutes = require('./routes/quiz');
const app = express();
// database
app.use(express.json());
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000,
        max: 60,
    })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use('/api/v1', authRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', quizRoutes);
module.exports = app;
