const express = require('express');
const rescue = require('express-rescue');

const controller = require('../controllers/posts');

const post = express.Router();

post.post('/', rescue(controller.insert));
post.get('/', rescue(controller.find));
post.get('/:id', rescue(controller.findOne));
post.put('/:id', rescue(controller.updateOne));

module.exports = post;
