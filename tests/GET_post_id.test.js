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

describe('GET /post/:id', () => {
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

  test('1 - when a post exists', async () => {
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

    await frisby.get(`${url}/post/${result.id}`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        console.log(json.data);
        expect(json).toHaveProperty('data');
        expect(typeof json.data).toBe('object');
        expect(json.data._id).toBe(result.id);
        expect(json.data.title).toBe(title);
        expect(json.data.description).toContain(description);
        expect(json.data.author).toBe(author);
        expect(json.data.categories).toEqual(categories);
      });
  });
  test('2 - when a post id is invalid', async () => {
    await frisby.get(`${url}/post/9001`)
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid id request: 9001')
      });
  });
  test('3 - when a post id is not found', async () => {
    await frisby.get(`${url}/post/61a0432ec93be120a6507340`)
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Post 61a0432ec93be120a6507340 not found')
      });
  })
});
