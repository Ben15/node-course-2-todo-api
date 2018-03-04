// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Users').deleteMany({
  //   name: 'Ben'
  // }).then((result) => {
  //   console.log(result);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Something to do'
  // }).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: ObjectID("5a9b9511b491f45cfbcdbc6b")
  }).then((result) => {
    console.log(result);
  })


  // db.close();
});
