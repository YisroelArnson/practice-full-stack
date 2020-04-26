const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
  const uri = 'mongodb+srv://yisroel:%403pass98golD@mmo-lz2qz.mongodb.net/test?retryWrites=true&w=majority' // paste uri from mongoDB atlas here and input your db user credentials


  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {

      if (err) {
        return callback(err);
      } else {
        mongoDB = client.db('full-stack-server');
        return callback('DB OK');
      }

    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };
