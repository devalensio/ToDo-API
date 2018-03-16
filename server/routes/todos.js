var express = require('express');
var router = express.Router();
const {createToDo,myTodo,updateTodo} = require('../controllers/todo');

router.post('/create', createToDo)
router.post('/mytodo', myTodo)
router.put('/edit/:userId', updateTodo)
router.delete('/delete/:userId', updateTodo)


module.exports = router;
