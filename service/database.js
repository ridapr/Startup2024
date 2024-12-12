const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const ReviewCollection = db.collection('review');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addReview(review) {
  return ReviewCollection.insertOne(review);
}

function getReviews() {
  const query = { review: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { review: -1 },
    limit: 10,
  };
  const cursor = reviewCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addReview,
  getReviews,
};



// const { MongoClient } = require('mongodb');
// const uuid = require('uuid');
// const bcrypt = require('bcrypt');
// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();

// const config = require('./dbConfig.json');
// const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// const client = new MongoClient(url);
// const collection = client.db('authTest').collection('user');

// app.use(cookieParser());
// app.use(express.json());

// // createAuthorization from the given credentials
// app.post('/auth/create', async (req, res) => {
//   if (await getUser(req.body.email)) {
//     res.status(409).send({ msg: 'Existing user' });
//   } else {
//     const user = await createUser(req.body.email, req.body.password);
//     setAuthCookie(res, user.token);
//     res.send({
//       id: user._id,
//     });
//   }
// });

// // loginAuthorization from the given credentials
// app.post('/auth/login', async (req, res) => {
//   const user = await getUser(req.body.email);
//   if (user) {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       setAuthCookie(res, user.token);
//       res.send({ id: user._id });
//       return;
//     }
//   }
//   res.status(401).send({ msg: 'Unauthorized' });
// });

// // getMe for the currently authenticated user
// app.get('/user/me', async (req, res) => {
//   authToken = req.cookies['token'];
//   const user = await collection.findOne({ token: authToken });
//   if (user) {
//     res.send({ email: user.email });
//     return;
//   }
//   res.status(401).send({ msg: 'Unauthorized' });
// });

// function getUser(email) {
//   return collection.findOne({ email: email });
// }

// async function createUser(email, password) {
//   const passwordHash = await bcrypt.hash(password, 10);
//   const user = {
//     email: email,
//     password: passwordHash,
//     token: uuid.v4(),
//   };
//   await collection.insertOne(user);

//   return user;
// }

// function setAuthCookie(res, authToken) {
//   res.cookie('token', authToken, {
//     secure: true,
//     httpOnly: true,
//     sameSite: 'strict',
//   });
// }

// // const port = 8080;
// // app.listen(port, function () {
// //   console.log(`Listening on port ${port}`);
// // });