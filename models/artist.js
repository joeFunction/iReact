const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  artist: String,
  picture: String,
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const Artist = mongoose.model("Artist", userSchema);

module.exports = Artist;
