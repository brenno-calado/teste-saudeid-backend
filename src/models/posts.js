const connection = require('./connection');

const insertOne = async ({
  title, description, author, categories,
}) => (
  connection().then((db) => db.collection('posts')
    .insertOne({
      title, description, author, categories,
    }))
);

module.exports = { insertOne };
