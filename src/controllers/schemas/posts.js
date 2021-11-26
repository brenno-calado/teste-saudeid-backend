const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().not().empty().required(),
  description: Joi.string().not().empty().required(),
  author: Joi.string().not().empty().required(),
  categories: Joi.array().items(Joi.string().required()).required(),
});

const findOneSchema = Joi.object({
  id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
});

const checkFindOne = (params) => findOneSchema.validate(params);

const checkPost = (body) => postSchema.validate(body);

module.exports = { checkPost, checkFindOne };
