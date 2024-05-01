const express = require('express');
const cors = require('cors');
const roadmapRouter = require('./routes/roadmapRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', roadmapRouter);

module.exports = app;