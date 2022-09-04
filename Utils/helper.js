var bycrypt = require('bcrypt');
const saltRound = 10;
module.exports.failureJson = function failureJson(message) {
  return {
    success: false,
    message: message,
  };
};

module.exports.bycryptPassword = async function bycryptPassword(password) {
  return await bycrypt.hash(password, saltRound);
};

module.exports.comparePassword = async function comparePassword(
  hash,
  password
) {
  return await bycrypt.compare(password, hash);
};
