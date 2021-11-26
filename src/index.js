const express = require('express');
const rescue = require('express-rescue');
const { ValidationError } = require('joi');
require('dotenv').config();
const post = require('./routes/post');
const errorHandling = require('./middlewares/errorHandling');
const JoiErrorHandling = require('./middlewares/joiErrorHandling');

const app = express();
app.use(express.json());

app.use('/post', post);
// app.use('/category', category);
// app.use('/user', user);
app.use(rescue.from(ValidationError, JoiErrorHandling));
app.use(errorHandling);

app.listen(process.env.PORT);
