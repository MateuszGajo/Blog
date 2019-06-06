const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = graphql


const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        date: { type: GraphQLString },
        image: { type: GraphQLString },
        recipe: { type: GraphQLList(GraphQLString) },
        products: { type: GraphQLList(GraphQLString) },
        categories: { type: GraphQLList(GraphQLString) }
    })
})

module.exports = PostType;