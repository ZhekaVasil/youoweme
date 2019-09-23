const { User, Debt } = require('./index');

const getDebt = function(ids) {
  return Debt.find({_id: {$in: ids}}).then(debts => {
    return debts.map(debt => {
      return {
        ...debt._doc,
        owner: User.findById(debt._doc.owner),
        oweTo: User.findById(debt._doc.oweTo),
      }
    })
  });
};

module.exports = {
  getDebt
};
