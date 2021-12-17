const customId = require("custom-id");

const generateToID = () => {
  let snowflake = customId({
    name: "quan",
    email: "quan",
    randomLength: 2,
  });
  return snowflake;
};

module.exports = { generateToID };
