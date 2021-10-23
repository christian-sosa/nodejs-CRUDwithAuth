const jwt = require("jsonwebtoken");
const key = require("../utils/key");

function createToken(user) {
  const payload = {
    userId: user.id,
    name: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  };
  const secret = key.key;
  const options = {};
  return jwt.sign(payload, secret, options);
};

module.exports = createToken;
