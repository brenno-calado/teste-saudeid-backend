const { checkPost } = require('./schemas/posts');
const service = require('../services/posts');

const find = async (req, res) => {
  const [result, err] = await service.find();
  if (err) throw err;

  console.log(result);

  return res.status(200).json({ data: result });
};

const insert = async (req, res) => {
  const { error } = checkPost(req.body);
  if (error) throw error;

  const [result, err] = await service.insert(req.body);
  if (err) throw err;

  return res.status(201).json({ data: result });
};

module.exports = { find, insert };
