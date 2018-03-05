const {ObjectID} = require('mongodb')
let express = require('express')
let bodyParser = require('body-parser')

let {mongoose} = require('./db/mongoose')
let {Todo} = require('./models/todo')
let {User} = require('./models/user')

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  var todo = new Todo({
    text: req.body.text,
  });

  todo.save().then((doc)=>{
    res.send(doc)
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
res.status(400).send(e)
  });
})


app.get('/todos/:id', (req, res) => {
  var id = req.params.id

  // validate id using isValid

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  // //  findById
  //
  Todo.findById(id).then((todo) => {
    if(!todo){
      res.status(404).send()
    }
      res.status(200).send({todo})
  }).catch((e) => {
    if(e){
      res.status(400).send()
    }
  })

})

app.listen(3000, () => {
  console.log('Started on port 3000');
})

module.exports = {app};
