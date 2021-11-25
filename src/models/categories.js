const connection = require('./connection');

const find = async (categories) => (
  connection().then((db) => db.collection('categories')
    .aggregate([
      { $match: { category: { $in: categories } } },
      { $group: { _id: '$category' } },
    ]).toArray())
);

module.exports = { find };
