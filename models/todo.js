const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    name: { type: String, required: true },
    done: { type: Boolean },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;