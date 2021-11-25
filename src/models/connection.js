const { MongoClient } = require('mongodb');

const {
  NODE_ENV, MONGO_PORT, MONGO_HOST, DB_NAME,
} = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = `${MONGO_HOST}${MONGO_PORT}/${DB_NAME}${NODE_ENV}`;

const connection = () => (MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => conn.db()));

module.exports = connection;
