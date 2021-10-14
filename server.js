const express = require('express');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();
const htmlRoutes = require('./routes/html-routes.js')
const apiRoutes = require('./routes/api-routes.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.use(express.static('public'));







