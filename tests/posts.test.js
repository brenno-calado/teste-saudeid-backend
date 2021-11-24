require('dotenv').config();

const frisby = require('frisby');
const { MongoClient } = require('mongodb');

const categoriesSeed = require('../sample/categoriesSeed');
const postsSeed = require('../sample/postSeed');
const usersSeed = require('../sample/usersSeed');

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
    db = connection.db(`${process.env.DBNAME}Test`);

    await db.collection('categories').insertMany(categoriesSeed);
  });
  
  beforeEach(async () => {
    await db.collection('users').deleteMany({});
    await db.collection('posts').deleteMany({});
    await db.collection('users').insertMany(usersSeed);
    await db.collection('posts').insertMany(postsSeed);
  });

  afterAll(async () => {
    await db.collection('categories').deleteMany({});
    await connection.close();
  });
});

describe('GET all Posts', () => { });

describe('GET one Post', () => { });

describe('PUT post', () => { });

describe('DELETE post', () => { });
