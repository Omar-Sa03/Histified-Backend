require('dotenv').config();
const express = require('express');
const imageRoutes = require('./routes/image.routes');
const articleRoutes = require('./routes/article.routes'); // DÉCOMMENTER
const errorHandler = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/images', imageRoutes);
app.use('/api/articles', articleRoutes); // DÉCOMMENTER
app.use(errorHandler);

module.exports = app;
