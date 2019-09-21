const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
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
  },
});


userSchema.statics.findByEmail = function (email) {
  return this.findOne({
    email: email,
  });
};


const User = mongoose.model('User', userSchema);
module.exports = User;
