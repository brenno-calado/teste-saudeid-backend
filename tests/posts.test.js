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

  test('when theres no title', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when theres no description', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when theres no author', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when theres no categories', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when title is not a string', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when description is not a string', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when author is not a string', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when categories is not an array of strings', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when author does not exist', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when one of the categories does not exist', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('');
    })
  });
  test('when creating a post is successful', async () => {
    await frisby.post(`${url}/post`, {
      title: '',
      description: '',
      author: '',
      categories: [],
    })
    .expect('status', 201)
    .then((response) => {
      const { json } = response;
      expect(json.data).toHaveProperty('id');
      expect(json.data.author).toBe('');
    })
  });
});

describe('GET all Posts', () => { });

describe('GET one Post', () => { });

describe('PUT post', () => { });

describe('DELETE post', () => { });
