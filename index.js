const MongoClient = require('mongodb').MongoClient;
let fs = require('fs');

// Not pictured: a mongodb on and listening on localhost:3000

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'images';
let db;

const encodeImage = (img) => {
  var bitmap = fs.readFileSync(img);
  return new Buffer.from(bitmap).toString('base64');
};

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err);

  // Storing a reference to the database so you can use it later
  db = client.db(dbName);
  collectionName = 'main';

  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`);

  const imageName = 'udon.jpg';
  const imgEncoded = encodeImage(`./${imageName}`);

  const imageObj = {
    name: imageName,
    encodedImage: imgEncoded,
  };

  db.collection(collectionName).insertOne(imageObj, (err, res) => {
    if (err) throw err;

    console.log('Image inserted');
  });
});

// db.collection('main')
//   .find()
//   .toArray((err, res) => {
//     if (err) throw err;

//     console.log(res);
//     // db.close();
//   });
