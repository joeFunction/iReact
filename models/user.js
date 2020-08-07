const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  artist: [{ firstName: String, lastName: String }],
  username: { type: String, required: true },
  password: { type: String, required: true },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "artist",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
