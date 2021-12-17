const db = require("../../db/knex");
const pkg = require("../../pkg");

const createUser = async (firstname, lastname, age) => {
  const user = {
    id: pkg.generateToID(),
    firstname,
    lastname,
    age,
  };

  return await db("users").insert(user).returning("*");
};

const getUserById = async (id) => {
  const user = await db("users").where({ id: id });

  return user;
};

const serachUser = async (name) => {
  const user = await db("users")
    .where("lastname", "like", `%${name}%`)
    .orderBy("firstname", "desc");

  return user;
};

const updateUser = async (id, entity) => {
  const user = await db("users")
    .where({ id: id })
    .update(entity)
    .returning("*");

  return user;
};

const deleteUser = async (id) => {
  const user = await db("users").where("id", id).del().returning("*");

  return user;
};

const repositpry = {
  createUser,
  getUserById,
  serachUser,
  updateUser,
  deleteUser,
};

module.exports = repositpry;
