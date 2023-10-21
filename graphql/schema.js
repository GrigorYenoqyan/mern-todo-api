const typeDefs = `#graphql
  type Todo {
    name: String!
    done: Boolean!
    id: ID!
  }
  type Query {
    todos: [Todo]
  }
  type Mutation {
    createTodo(name: String!): Todo
    deleteTodo(id: ID!): ID
    updateTodo(id: ID!, todo: UpdateTodo): Todo
  }
  input UpdateTodo {
    name: String
    done: Boolean
  }
`;

module.exports = typeDefs;
