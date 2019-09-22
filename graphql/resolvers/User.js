const { User } = require('../../models');

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: (root, { email }) => User.findByEmail(email),
    users: (root, { userFilter: filter }) => {
      return User.getAllUsers(filter)
    },
  },

  Mutation: {
    addUser: async (root, { userInput: user }) => {
      return User.addUser(user);
    }
  }
};

module.exports = resolvers;
