const { checkPost, checkFindOne } = require('./schemas/posts');
const service = require('../services/posts');

const find = async (req, res) => {
  const [result, err] = await service.find();
  if (err) throw err;

  return res.status(200).json({ data: result });
};

const findOne = async (req, res) => {
  const { error } = checkFindOne(req.params);
  if (error) throw error;

  const [result, err] = await service.findOne(req.params);
  const wrapError = { code: 404, message: err };
  if (err) throw wrapError;

  return res.status(200).send({ data: result });
};

const insert = async (req, res) => {
  const { error } = checkPost(req.body);
  if (error) throw error;

  const [result, err] = await service.insert(req.body);
  const wrapError = { code: 400, message: err };
  if (err) throw wrapError;

  return res.status(201).json({ data: result });
};

module.exports = { find, findOne, insert };
