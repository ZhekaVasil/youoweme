const { User } = require('../../models');
const database = require('../../controllers/Database');

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: async (root, { email }) => {
      return User.findByEmail(email);
    },
  },
};

module.exports = resolvers;
