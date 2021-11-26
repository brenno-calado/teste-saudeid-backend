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

const updateOne = async (filter, update) => (
  connection().then((db) => db.collection('posts')
    .updateOne(filter, { $set: update }))
);

module.exports = {
  find, findOne, insertOne, updateOne,
};
