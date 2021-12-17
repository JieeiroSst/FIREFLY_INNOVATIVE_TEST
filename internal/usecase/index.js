const repositpry = require("../repository");

const createUser = async (firstname, lastname, age) => {
  try {
    const user = await repositpry.createUser(firstname, lastname, age);

    return user;
  } catch (error) {
    return error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await repositpry.getUserById(id);

    return user;
  } catch (error) {
    return error;
  }
};

const serachUser = async (name) => {
  try {
    const user = await repositpry.serachUser(name);

    return user;
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, entity) => {
  try {
    const user = await repositpry.updateUser(id, entity);

    return user;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await repositpry.deleteUser(id);

    return user;
  } catch (error) {
    return error;
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
