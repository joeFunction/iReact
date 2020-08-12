const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  artist: [{ firstName: String, lastName: String }],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const artist = mongoose.model("artist", artistSchema);

module.exports = artist;
