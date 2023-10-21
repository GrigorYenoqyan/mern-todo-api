const Todo = require("../models/todo");

const resolvers = {
  Query: {
    todos: async () => {
      try {
        const todos = await Todo.find();
        return todos;
      } catch (error) {
        console.error("Error retrieving todos:", error);
        throw error;
      }
    },
  },

  Mutation: {
    async createTodo(_, args) {
      const newTodo = new Todo({
        name: args.name,
        done: false,
      });

      try {
        await newTodo.save();
      } catch (error) {
        console.error("Error creating a todo:", error);
        throw error;
      }

      return newTodo;
    },

    async deleteTodo(_, args) {
      try {
        await Todo.findByIdAndRemove(args.id);
      } catch (error) {
        console.error("Error deleting the todo:", error);
        throw error;
      }

      return args.id;
    },

    async updateTodo(_, args) {
      let todo;

      try {
        todo = await Todo.findById(args.id);
      } catch (error) {
        console.error("Error retrieving the todo:", error);
        throw error;
      }

      if (args.todo.name) {
        todo.name = args.todo.name;
      }

      if (typeof args.todo.done === "boolean") {
        todo.done = args.todo.done;
      }

      try {
        await todo.save();
      } catch (error) {
        console.error("Error updating the todo:", error);
        throw error;
      }

      return todo;
    },
  },
};

module.exports = resolvers;
