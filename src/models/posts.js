const connection = require('./connection');

const find = async (query) => (
  connection().then((db) => db.collection('posts').find(query).toArray())
);

const findOne = async (query) => (
  connection().then((db) => db.collection('posts').findOne(query))
);

const insertOne = async ({
  title, description, author, categories,
}) => (
  connection().then((db) => db.collection('posts')
    .insertOne({
      title, description, author, categories,
    }))
);

module.exports = { find, findOne, insertOne };
