const { GraphQLNonNull, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

// Define User type
const User = new GraphQLObjectType({
  name: 'UserType',
  description: "This is UserType",
  fields: () => ({
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
  }),
  
});


// Define RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
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


// Create Schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
