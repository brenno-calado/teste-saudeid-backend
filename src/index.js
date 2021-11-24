const express = require('express');
require('dotenv').config();
const post = require('./routes/post');

const app = express();
app.use(express.json());

app.use('/post', post);
// app.use('/category', category);
// app.use('/user', user);

app.listen(process.env.PORT);
