const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runvalidators: true})

module.exports = Todo