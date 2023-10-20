const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    todos: [Todo]
  }
  type Todo {
    name: String
    done: Boolean
    id: ID
  }
`);


module.exports = schema;
