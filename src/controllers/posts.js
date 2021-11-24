// const service = require('../services/posts');
const { checkPost } = require('./schemas/posts');

const insert = async (req, res) => {
  const { error } = checkPost(req.body);
  if (error) {
    throw error;
  }

  return res.status(201).json({});
};

module.exports = { insert };
