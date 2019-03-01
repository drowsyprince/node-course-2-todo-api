const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5c78f3f6448b87387de7a372'}).then(() => {
//
// })

Todo.findByIdAndRemove('5c78f3f6448b87387de7a372').then((todo) => {
  console.log(todo);
});
