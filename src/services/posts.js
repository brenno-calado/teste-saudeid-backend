const { ObjectID } = require('bson');
const postsModel = require('../models/posts');
const categoriesModel = require('../models/categories');
const usersModel = require('../models/users');

const deleteOne = async ({ id }) => {
  const result = await postsModel.deleteOne({ _id: new ObjectID(id) });
  if (!result) return [null, `Post ${id} not found`];

  return [result, null];
};

const find = async () => {
  const result = await postsModel.find({});
  return [result, null];
};

const findOne = async ({ id }) => {
  const result = await postsModel.findOne({ _id: new ObjectID(id) });
  if (!result) return [null, `Post ${id} not found`];

  return [result, null];
};

const insert = async ({
  title, description, author, categories,
}) => {
  const userExists = await usersModel.findOne(author);
  if (!userExists) {
    return [null, 'author not found'];
  }

  const categoriesExist = await categoriesModel.find(categories);
  if (categoriesExist.length !== categories.length) {
    return [null, 'category not found'];
  }

  const result = await postsModel.insertOne({
    title,
    description,
    author,
    categories,
  });

  return [{ id: result.insertedId, author }, null];
};

const updateOne = async (
  { id },
  {
    title, description, author, categories,
  },
) => {
  const [postResult, error] = await findOne({ id });
  if (error && !postResult) return [null, error];

  const userExists = await usersModel.findOne(author);
  if (!userExists) {
    return [null, 'author not found'];
  }

  const categoriesExist = await categoriesModel.find(categories);
  if (categoriesExist.length !== categories.length) {
    return [null, 'category not found'];
  }

  const result = await postsModel.updateOne(
    { _id: new ObjectID(id) },
    {
      title,
      description,
      author,
      categories,
    },
  );

  if (result.modifiedCount === 0) {
    return [null, 'document not modified'];
  }

  return [result, null];
};

module.exports = {
  deleteOne, find, findOne, insert, updateOne,
};
