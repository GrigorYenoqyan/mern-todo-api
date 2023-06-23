const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const root = require("./resolvers");

module.exports = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
});
