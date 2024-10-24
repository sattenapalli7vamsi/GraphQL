const { GraphQLInputObjectType, GraphQLNonNull, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

// Define User type
const User = new GraphQLObjectType({
  name: 'User',
  description: "This is UserType",
  fields: {  // () =>
    id: { type: GraphQLString, description: "id of the user" },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    // fullName: {
    //     type: GraphQLString,
    //     args: {
    //       uppercase: { type: GraphQLBoolean } // Accept an argument to format the name
    //     },
    //     resolve(parent, args) {
    //       if (args.uppercase) {
    //         return parent.name.toUpperCase();
    //       }
    //       return parent.name;
    //     }
    //   },
    //
    //uncomment the above lines, if you want to fetch the name of the user in upper case
  },
  
});

// Define UserInput type
const UserInput = new GraphQLInputObjectType({
    name: 'UserInput',
    description: "Input payload for creating or updating a user",
    fields: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
    },
  });

// Define RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: "This is RootQuery",
  fields: {
    users: {
      type: new GraphQLList(User),
      description: "This gives all the users' details" // Return a list of users
    },
    user: {
      type: User,
      description: " This gives details of a user",
      args: { id: { type: new GraphQLNonNull(GraphQLString)},  // add default value -->  defaultValue: '1', it bypasses the condition of Non-Null
              name: {type: GraphQLString} }, // Argument for the user ID
    },
  },
});

// Define Mutation
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: "Root Mutation",
    fields: {
      createUser: {
        type: User, // Return type is UserType
        args: {
          input: { type: new GraphQLNonNull(UserInput) }, // Input object is required
        },
      },
    },
  });


// Create Schema
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

module.exports = schema;
