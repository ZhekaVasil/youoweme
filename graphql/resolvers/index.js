const User = require('./User');
const Debt = require('./Debt');

const resolvers = {
  Query: {
    ...User.Query,
    ...Debt.Query,
  },
  Mutation: {
    ...User.Mutation,
    ...Debt.Mutation,
  },
};

module.exports = resolvers;
