require('dotenv').config();

const frisby = require('frisby');
const { MongoClient } = require('mongodb');

const {
  HOST, PORT, DB_NAME, MONGO_HOST, MONGO_PORT, NODE_ENV,
} = process.env;

const categoriesSeed = require('../sample/categoriesSeed');
const postsSeed = require('../sample/postSeed');
const usersSeed = require('../sample/usersSeed');

const {
  title, description, author, categories,
} = require('./mocks/post.mock');

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

  test('1 - when post is deleted successfully', async () => {
    let result;

    await frisby.post(`${url}/post`, {
      title,
      description,
      author,
      categories,
    })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        result = json.data;
      });

    await frisby.delete(`${url}/post/${result.id}`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Deleted post successfully.');
      })

      await frisby.get(`${url}/post/${result.id}`)
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe(`Post ${result.id} not found`);
      });
  });
});
