const bcrypt = require("bcrypt");
const UserModel = require("../../schemas/userSchema");

const SALT_ROUND = 10;

const createUser = async (req, res) => {
  const { password, email, phoneNumber, address } = req.body;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

  console.log(hashedPassword, "hashedPassword");
  console.log(password, "password");

  try {
    const data = await UserModel.create({
      password: password,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
    });

    res.status(201).json(`createdUser: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrond: ${err}`);
  }
};

module.exports = createUser;
