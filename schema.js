const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');


// Define User type
const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: "This is UserType",
  fields: () => ({
    id: { type: GraphQLString, description: "id of the user" },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
  
});

// Define RootQuery
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: "This is RootQuery",
  fields: {
    users: {
      type: new GraphQLList(UserType), // Return a list of users
    //   resolve(parent, args) {
    //     return users; // Return the sample data
    //  },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } }, // Argument for the user ID
    //   resolve(parent, args) {
    //     return users.find(user => user.id === args.id); // Find user by ID
    //   },
    },
  },
});

// Create Schema
const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;
