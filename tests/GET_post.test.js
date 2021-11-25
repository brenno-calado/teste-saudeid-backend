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

describe('GET /post', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db(`${process.env.DB_NAME}${process.env.NODE_ENV}`);

    await db.collection('users').deleteMany({});
    await db.collection('users').insertMany(usersSeed);
    await db.collection('categories').deleteMany({});
    await db.collection('categories').insertMany(categoriesSeed);
    await db.collection('posts').deleteMany({});
    await db.collection('posts').insertMany(postsSeed);
  });

  afterAll(async () => {
    await connection.close();
  });

  test('1 - when a response is successful', async () => {
    await frisby.get(`${url}/post`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const parsed = JSON.parse(body);
        expect(parsed).toHaveProperty('data');
        expect(Array.isArray(parsed.data)).toBe(true);
        expect(parsed.data.length).toBe(16);
        expect(parsed.data[0].title).toBe('Lorem Ipsum');
        expect(parsed.data[0].description).toContain('dolor');
        expect(typeof parsed.data[0].author).toBe('string');
        expect(typeof parsed.data[0].categories[0]).toBe('string');
        expect(Array.isArray(parsed.data[0].categories)).toBe(true);
      });
  });
});
