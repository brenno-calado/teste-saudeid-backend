require('dotenv').config();

const frisby = require('frisby');
const { MongoClient } = require('mongodb');

const categoriesSeed = require('../sample/categoriesSeed');
const postsSeed = require('../sample/postSeed');
const usersSeed = require('../sample/usersSeed');

const title = 'Is Thy Node as Thou thinks?';
const description = 'To Node or not to Node? That is the request';
const author = 'Evelina Escobar Cedraz';
const categories = ['health', 'technology'];

const unknownAuthor = 'Michelangelo Brasiliensis';
const unknownCategory = 'cats';
const wrongFormat = 42;

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
      description,
      author,
      categories,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request: missing title');
      });
  });
  test('when theres no description', async () => {
    await frisby.post(`${url}/post`, {
      title,
      author,
      categories,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request: missing description');
      });
  });
  test('when theres no author', async () => {
    await frisby.post(`${url}/post`, {
      title,
      description,
      categories,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request: missing author');
      });
  });
  test('when theres no categories', async () => {
    await frisby.post(`${url}/post`, {
      title,
      description,
      author,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request: missing categories');
      });
  });
  test('when title is not a string', async () => {
    await frisby.post(`${url}/post`, {
      title: wrongFormat,
      description,
      author,
      categories,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request: title is not a string');
      });
  });
  test('when description is not a string', async () => {
    await frisby.post(`${url}/post`, {
      title,
      description: wrongFormat,
      author,
      categories,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request: description is not a string');
      });
  });
  test('when author is not a string', async () => {
    await frisby.post(`${url}/post`, {
      title,
      description,
      author: wrongFormat,
      categories,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request: author is not a string');
      });
  });
  test('when categories is not an array of strings', async () => {
    await frisby.post(`${url}/post`, {
      title,
      description,
      author,
      categories: wrongFormat,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request: categories is not an array of strings');
      });
  });
  test('when author does not exist', async () => {
    await frisby.post(`${url}/post`, {
      title,
      description,
      author: unknownAuthor,
      categories,
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request, try again');
      });
  });
  test('when one of the categories does not exist', async () => {
    await frisby.post(`${url}/post`, {
      title,
      description,
      author,
      categories: [...categories, unknownCategory],
    })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Invalid request, try again');
      });
  });
  test('when creating a post is successful', async () => {
    await frisby.post(`${url}/post`, {
      title,
      description,
      author,
      categories,
    })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.data).toHaveProperty('id');
        expect(json.data.author).toBe(author);
      });
  });
});

describe('GET all Posts', () => { });

describe('GET one Post', () => { });

describe('PUT post', () => { });

describe('DELETE post', () => { });
