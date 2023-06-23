const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    getTodos: [Todo]
  }
  type Todo {
    name: String
    done: Boolean
  }
`);


module.exports = schema;
