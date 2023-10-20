const typeDefs = `#graphql
  type Todo {
    name: String
    done: Boolean
    id: ID
  }
  type Query {
    todos: [Todo]
  }
`;

module.exports = typeDefs;
