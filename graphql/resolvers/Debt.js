const { Debt } = require('../../models');

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    debts: () => Debt.getAllDebts(),
  },

  Mutation: {
    addDebt: async (root, { debtInput: debt }) => {
      return Debt.addDebt(debt);
    }
  }
};

module.exports = resolvers;
