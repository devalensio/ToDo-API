const Todos = require('../models/todo')

module.exports = {
  createToDo: function (req, res) {
    const todos = new Todos()
        todos.owner = req.body.userId,
        todos.title = req.body.title,
        todos.description = req.body.description
        todos.save().then(data_todo => {
          res.status(201).json({
            message: 'new todo was created',
            data_todo
          })
        }).catch(err => {
          res.status(500).json({
            message: 'error'
          })
        })
  },
  myTodo: function (req, res) {
    Todos.find({
      owner: req.body.userId
    }).populate('owner').exec().then(data_todo => {
      res.status(201).json({
        message: 'Your todo list',
        data: data_todo
      })
    }).catch(err => {
      res.status(500).json({
        message: "error",
        data: err
      })
    })
  },

  updateTodo: function (req, res) {
    Todos.updateOne({
      owner: req.params.userId
    },{
      $set: {title: req.body.title,description: req.body.description}
    }).then(data_todo => {
      res.status(202).json({
        message: 'success update',
        data_todo
      })
    })
  },

  deleteTodo: function (req, res) {
    Todos.remove({
      owner: req.params.userId
    })
      .then(data_todo => {
        res.status(202).json({
          message: 'success delete todo'
        })
      })
  }


//ObjectId("5aa8fb522b6ce8e2369ec521")

};
