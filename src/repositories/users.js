const User = require("../models/user");

const getAll = async() => {
  return await User.find();
};

const getOne = async (id) => {
  return await User.findById(id);
};

const persist = async (user) => {
  return await User.create(user);
};

const update = async (id, user) => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

const destroy = async (id) => {
  return await User.findByIdAndRemove(id);
};

module.exports = {
  persist,
  update,
  getAll,
  getOne,
  destroy,
};
