const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "UserQueryType",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

module.exports = UserType;
