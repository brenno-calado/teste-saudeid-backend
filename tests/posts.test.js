require('dotenv').config();

const frisby = require('frisby');
const { MongoClient } = require('mongodb');

const mongoDbUrl = `mongodb://localhost:27017/${process.env.DBNAME}`;
const url = `http://localhost:${process.env.PORT}`;

describe('POST post', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db(process.env.DBNAME)
  });

  beforeEach(async () => {
    await db.collection('posts').deleteMany({});
    await db.collection('posts').insertMany(PostSeed);
  });
});

describe('GET all Posts', () => { });

describe('GET one Post', () => { });

describe('PUT post', () => { });

describe('DELETE post', () => { });
