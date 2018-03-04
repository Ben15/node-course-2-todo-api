// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

// // findOneAndUpdate(filter, update, options, callback)
//   db.collection('Todos').findOneAndUpdate(
//     {
//       _id:ObjectID("5a9ba30636be7e3de19fc686")
//     },{
//       $set: {
//         completed: true
//       }
//     },
//     {
//       returnOriginal: false
//     }
//   ).then((result) => {
//     console.log(result);
//   })


// update name of specific document
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a9b94a26091ad5ce93cfb07')
  },
  {
    $set:{name: 'Benny'},
    $inc:{age: 1}  
  },
  {
    returnOriginal: false
  }
).then((result) => {
  console.log(result);
})

  // db.close();
});
