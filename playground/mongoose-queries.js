const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

let id = '5a9bf9af0b9cd35f00071be2';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if( !todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e))


User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e))


// Read more http://mongoosejs.com/docs/queries.htmls
