const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = graphql
const PostType = require('./types/PostType')
const CategoryType = require('./types/CategoryType');
const PostSchema = require('../models/post');
const CategorySchema = require('../models/category');


const RootQueries = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return PostSchema.findById(args.id)
            }
        },
        posts: {
            type: GraphQLList(PostType),
            resolve(parent, args) {
                return PostSchema.find({})
            }
        },
        categories: {
            type: GraphQLList(CategoryType),
            resolve(paren, args) {
                return CategorySchema.find({})
            }
        }
    }
})

const RootMutation = new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
        addPost: {
            type: PostType,
            args: {
                title: { type: GraphQLString },
                date: { type: GraphQLString },
                image: { type: GraphQLString },
                recipe: { type: GraphQLList(GraphQLString) },
                products: { type: GraphQLList(GraphQLString) },
                categories: { type: GraphQLList(GraphQLString) }
            },
            resolve(parent, args) {
                return new PostSchema({ ...args }).save()
            }
        },
        addCategory: {
            type: CategoryType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(parent, args) {
                return new CategorySchema(args).save();
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQueries,
    mutation: RootMutation

})