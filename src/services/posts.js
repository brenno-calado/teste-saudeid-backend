const postsModel = require('../models/posts');
const categoriesModel = require('../models/categories');
const usersModel = require('../models/users');

const insert = async ({
  title, description, author, categories,
}) => {
  const userExists = await usersModel.findOne(author);
  if (!userExists) {
    return [null, { details: [{ message: 'author not found' }] }];
  }

  const categoriesExist = await categoriesModel.find(categories);
  if (categoriesExist.length !== categories.length) {
    return [null, { details: [{ message: 'category not found' }] }];
  }

  const result = postsModel.insert({
    title,
    description,
    author,
    categories,
  });

  return result;
};

module.exports = { insert };
