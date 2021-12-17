const repositpry = require("../repository");

const createUser = async (firstname, lastname, age) => {
  try {
    const user = await repositpry.createUser(firstname, lastname, age);

    return user;
  } catch (error) {
    return error.message;
  }
};

const getUserById = async (id) => {
  try {
    const user = await repositpry.getUserById(id);

    return user;
  } catch (error) {
    return error.message;
  }
};

const serachUser = async (name) => {
  try {
    const user = await repositpry.serachUser(name);

    return user;
  } catch (error) {
    return error.message;
  }
};

const updateUser = async (id, entity) => {
  try {
    const user = await repositpry.updateUser(id, entity);

    return user;
  } catch (error) {
    return error.message;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await repositpry.deleteUser(id);

    return user;
  } catch (error) {
    return error.message;
  }
};

const usecase = {
  createUser,
  getUserById,
  serachUser,
  updateUser,
  deleteUser,
};

module.exports = usecase;
