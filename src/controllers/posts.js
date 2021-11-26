const { checkPost, checkFindOne } = require('./schemas/posts');
const service = require('../services/posts');

const deleteOne = async (req, res) => {
  const { error } = checkFindOne(req.params);
  if (error) throw error;

  const [result, err] = await service.deleteOne(req.params);
  if (err && !result) {
    const wrapError = { code: 404, message: err };
    throw wrapError;
  }

  res.status(200).json({ message: 'Deleted post successfully.' });
};

const find = async (req, res) => {
  const [result, err] = await service.find();
  if (err) throw err;

  return res.status(200).json({ data: result });
};

const findOne = async (req, res) => {
  const { error } = checkFindOne(req.params);
  if (error) throw error;

  const [result, err] = await service.findOne(req.params);
  if (err) {
    const wrapError = { code: 404, message: err };
    throw wrapError;
  }

  return res.status(200).send({ data: result });
};

const insert = async (req, res) => {
  const { error } = checkPost(req.body);
  if (error) throw error;

  const [result, err] = await service.insert(req.body);
  if (err) {
    const wrapError = { code: 400, message: err };
    throw wrapError;
  }

  return res.status(201).json({ data: result });
};

const updateOne = async (req, res) => {
  const { error } = checkPost(req.body);
  if (error) throw error;

  const { error: paramsError } = checkFindOne(req.params);
  if (paramsError) throw error;

  const [result, err] = await service.updateOne(req.params, req.body);
  if (err) {
    const wrapError = { code: 400, message: err };
    throw wrapError;
  }

  return res.status(200).json(
    { message: `Updated ${result.modifiedCount} post ${req.params.id} successfully.` },
  );
};

module.exports = {
  deleteOne, find, findOne, insert, updateOne,
};
