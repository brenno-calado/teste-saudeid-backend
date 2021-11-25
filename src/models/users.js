const connection = require('./connection');

const findOne = async (username) => (
  connection().then((db) => db.collection('users')
    .findOne({ username }))
);

module.exports = { findOne };
