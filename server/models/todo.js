const mongoose = require('mongoose');
const Schema = mongoose.Schema

const todoSchema = Schema({
  owner : {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  done: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "untitled todo"
  },
  description: {
    type: String,
    default: 'None'}
})

const Todos = mongoose.model('Todo', todoSchema)
module.exports = Todos
