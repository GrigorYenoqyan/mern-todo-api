const Todo = require("../models/todo");

const createTodo = async (req, res, next) => {
  const newTodo = new Todo({
    name: req.body.name,
    done: false,
  });

  try {
    await newTodo.save();
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ todo: newTodo });
};

const getTodos = async (req, res, next) => {
  let todos;

  try {
    todos = await Todo.find();
  } catch (error) {
    return res.json({ message: error });
  }

  res.json({ todos: todos.map((todo) => todo.toObject({ getters: true })) });
};

const updateTodo = async (req, res, next) => {
  const todoId = req.params.id;
  let todo;

  try {
    todo = await Todo.findById(todoId);
  } catch (error) {
    return next(error);
  }

  todo.name = req.body.name;
  if (typeof req.body.done === "boolean") {
    todo.done = req.body.done;
  }

  try {
    await todo.save();
  } catch (error) {
    return next(error);
  }

  res.json({ todo: todo.toObject({ getters: true }) });
};

const deleteTodo = async (req, res, next) => {
  const todoId = req.params.id;
  let todo;

  try {
    todo = await Todo.findByIdAndRemove(todoId);
  } catch (error) {
    return next(error);
  }

  res.status(200).json({ message: "Deleted" });
};

exports.createTodo = createTodo;
exports.getTodos = getTodos;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
