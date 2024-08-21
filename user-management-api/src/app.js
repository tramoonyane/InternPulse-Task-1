const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

// Use the routes defined in user.routes.js for the /api/users path
app.use('/api/users', userRoutes);

module.exports = app;
