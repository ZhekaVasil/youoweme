const { Debt, User } = require('../../models');
const { getDebt } = require('../../models/utils');

const getUser = (id) => {
  return User.findById(id).then(user => {
    return {
      ...user._doc,
      oweToDebts: getDebt(user._doc.oweToDebts)
    }
  })
};

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    debts: () => Debt.getAllDebts().then(debts => {
      return debts.map(debt => {
        return {
          ...debt._doc,
          owner: getUser(debt._doc.owner),
          oweTo: getUser(debt._doc.oweTo),
        }
      })
    }),
  },

  Mutation: {
    addDebt: async (root, { debtInput: debt }) => {
      return Debt.addDebt(debt);
    }
  }
};

module.exports = resolvers;
