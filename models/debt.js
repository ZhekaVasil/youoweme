const mongoose = require('mongoose');

const debtSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  oweTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true
  }
});

debtSchema.statics.getAllDebts = function () {
  return this.find();
};

debtSchema.statics.addDebt = function (debt) {
  return this.create(debt);
};


const Debt = mongoose.model('Debt', debtSchema);
module.exports = Debt;
