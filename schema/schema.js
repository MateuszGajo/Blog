const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;
const PostType = require("./types/PostType");
const CategoryType = require("./types/CategoryType");
const UserType = require("./types/UserType");

const PostModel = require("../models/post");
const CategoryModel = require("../models/category");
const userModel = require("../models/user");

const RootQueries = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return PostModel.findById(args.id);
      }
    },
    posts: {
      type: GraphQLList(PostType),
      resolve(parent, args) {
        return PostModel.find({});
      }
    },
    categories: {
      type: GraphQLList(CategoryType),
      resolve(paren, args) {
        return CategoryModel.find({});
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return userModel.findById(args.id);
      }
    }
  }
});

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
        return new PostModel({ ...args }).save();
      }
    },
    addCategory: {
      type: CategoryType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return new CategoryModel(args).save();
      }
    },
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args) {
        const hashPassword = userModel().hashPassword(args.password);
        return new userModel({ ...args, password: hashPassword }).save();
      }
    }
  }
});
module.exports = new GraphQLSchema({
  query: RootQueries,
  mutation: RootMutation
});
