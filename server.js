const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();


const app = express();
app.use(express.json());


connectDB();


app.use('/api/auth', require('./app/routes/authRoutes'));
app.use('/api/customers', require('./app/routes/customerRoutes'));
app.use('/api/cases', require('./app/routes/caseRoutes'));


app.listen(5000, () => console.log('Server running on port 5000'));