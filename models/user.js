const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  artist: {type: String, required: true},
  id: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;