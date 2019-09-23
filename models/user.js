const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  phone: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  oweToDebts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Debt',
    }
  ],
});

userSchema.statics.getAllUsers = function(filter) {
  return this.find(filter);
};

userSchema.statics.findByEmail = function (email) {
  return this.findOne({
    email: email,
  });
};

userSchema.statics.addUser = function (user) {
  user.oweToDebts = '5d87f09443813ea040be4081';
  return this.create(user);
};


const User = mongoose.model('User', userSchema);
module.exports = User;
