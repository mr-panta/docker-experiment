const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  user_id: String,
  uname: String,
  profile_image: String,
  last_update: Number,
}, {
  collection: 'userProfile'
});
const User = mongoose.model('user', userSchema);

module.exports = User;
