const { User, Debt } = require('../../models');
const { getDebt } = require('../../models/utils');

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: (root, { email }) => User.findByEmail(email).then(user => {
      if (user) {
        return {
          ...user._doc,
          oweToDebts: getDebt(user._doc.oweToDebts)
        }
      } else {
        return null
      }
    }),

    users: (root, { userFilter: filter }) => {
      return User.getAllUsers(filter).then(users => {
        return users.map(user => {
          return {
            ...user._doc,
            oweToDebts: getDebt(user._doc.oweToDebts)
          }
        })
      });
    },
  },

  Mutation: {
    addUser: async (root, { userInput: user }) => {
      return User.addUser(user);
    }
  }
};

module.exports = resolvers;
