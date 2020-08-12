// const db = require("../models");

const User = require("../models/user");
module.exports = {
  index: async (res, req) => {
    const users = await User.find({});
    res.status(200).json(users);
  },
  newUser: async (req, res) => {
    const newUser = newUser(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  },

  getUser: async (req, res) => {
    const { userId } = req.parms;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },
  newUserBook: async (req, res) => {
    const { userId } = req.params;
    const newBook = new Book(req.body);
  },
};
