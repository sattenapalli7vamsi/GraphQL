// src/resolvers.js
const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ];

const resolvers = {
  // RootQuery resolver
  RootQuery: {
    users: (parent, args) => users, // Return all users from the defined array
    user: (parent, args) => {if (args.id && args.name) {return users.find(user => user.id === args.id && user.name === args.name)}
                             if (args.id){return users.find(user => user.id === args.id)}
                             if (args.name){return users.find(user => user.name == args.name)}
   } // Find user by ID
  },

  Mutation: {
    createUser: (parent, args) => {
        const newUser = {
          id: String(users.length + 1),
          name: args.input.name,
          email: args.input.email,
        };
        users.push(newUser);
        return newUser;
      },
  }
};



module.exports = resolvers;
