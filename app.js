const express = require('express');
const roadmapRouter = require('./routes/roadmapRoutes');

const app = express();

app.use(express.json());
app.use('/', roadmapRouter);

module.exports = app;