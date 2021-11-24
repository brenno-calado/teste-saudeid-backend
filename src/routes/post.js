const express = require('express');

const controller = require('../controllers/posts');

const post = express.Router();

post.post('/', controller.insert);

module.exports = post;
