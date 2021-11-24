const express = require('express');
const rescue = require('express-rescue');

const controller = require('../controllers/posts');

const post = express.Router();

post.post('/', rescue(controller.insert));

module.exports = post;
