const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { password } = req.body;

  const { user } = req;

  try {
    // const user = await UserModel.findOne({ email });

    const hashedPassword = user.password;

    const isPasswordMatching = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordMatching) {
      res.status(400).json(`something went wrong: ${err}`);
    } else {
      res.status(200).json(`user: ${user}`);
    }
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = loginUser;
