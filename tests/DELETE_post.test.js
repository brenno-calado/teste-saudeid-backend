require('dotenv').config();

const frisby = require('frisby');
const { MongoClient } = require('mongodb');

const {
  HOST, PORT, DB_NAME, MONGO_HOST, MONGO_PORT, NODE_ENV,
} = process.env;

const categoriesSeed = require('../sample/categoriesSeed');
const postsSeed = require('../sample/postSeed');
const usersSeed = require('../sample/usersSeed');

const mongoDbUrl = `${MONGO_HOST}${MONGO_PORT}/${DB_NAME}${NODE_ENV}`;
const url = `${HOST}${PORT}`;

describe('DELETE /post', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db(`${process.env.DB_NAME}${process.env.NODE_ENV}`);

    await db.collection('categories').deleteMany({});
    await db.collection('categories').insertMany(categoriesSeed);
  });

  beforeEach(async () => {
    await db.collection('users').deleteMany({});
    await db.collection('posts').deleteMany({});
    await db.collection('users').insertMany(usersSeed);
    await db.collection('posts').insertMany(postsSeed);
  });

  afterAll(async () => {
    await connection.close();
  });
});
