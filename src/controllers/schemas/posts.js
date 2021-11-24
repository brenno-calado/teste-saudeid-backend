const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().not().empty().required(),
  description: Joi.string().not().empty().required(),
  author: Joi.string().not().empty().required(),
  categories: Joi.array().items(Joi.string().required()).required(),
});

const checkPost = (body) => postSchema.validate(body);

module.exports = { checkPost };
