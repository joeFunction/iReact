const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  artist:  String,  
  picture: String,
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "artist",
    },
  ],
});

const Artist = mongoose.model("Artist", userSchema);

module.exports = Artist;

