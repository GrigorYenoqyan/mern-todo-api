const Todo = require("../../models/todo");

const resolvers = {
  getTodos: async () => {
    try {
      const todos = await Todo.find();
      return todos;
    } catch (error) {
      console.error("Error retrieving todos:", error);
      throw error;
    }
  },
};

module.exports = resolvers;
