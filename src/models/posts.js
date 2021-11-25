const connection = require('./connection');

const find = async (query) => (
  connection().then((db) => db.collection('posts').find(query).toArray())
);

const insertOne = async ({
  title, description, author, categories,
}) => (
  connection().then((db) => db.collection('posts')
    .insertOne({
      title, description, author, categories,
    }))
);

module.exports = { find, insertOne };
