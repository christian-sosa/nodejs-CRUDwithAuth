const repository = require("../repositories/users");
const bcrypt = require("bcryptjs");

const createUser = async (user) => {
  const userHashPass = user;
  userHashPass.password = bcrypt.hashSync(userHashPass.password, 8);
  const result = await repository.persist(userHashPass);
  return result;
};

const updateUser = async (userId, user) => {
  const userHashPass = user;
  userHashPass.password = bcrypt.hashSync(userHashPass.password, 8);
  await repository.update(userId, userHashPass);
};

const getAllUsers = async () => await repository.getAll();

const getUserById = async (id) => await repository.getOne(id);

const deleteUser = async (id) => await repository.destroy(id);

module.exports = {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
