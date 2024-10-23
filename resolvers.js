// src/resolvers.js
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

const resolvers = {
  // RootQuery resolver
  RootQueryType: {
    users: () => users, // Return all users from the defined array
    user: (parent, args) => users.find(user => user.id === args.id), // Find user by ID
  },
  
  // UserType resolvers (if needed for fields)
  UserType: {
    // If you need custom logic for fields, define them here
  },
};

module.exports = resolvers;
