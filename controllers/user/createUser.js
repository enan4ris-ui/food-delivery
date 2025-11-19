const UserModel = require("../../schemas/userSchema");

const createUser = async (req, res) => {
  const { firstName, email, password, phoneNumber } = req.body;

  //   console.log("create user controller working");
  try {
    const data = await UserModel.create({
      firstName: firstName,
      email: email,
      password: password,
      address: address,
      phoneNumber: phoneNumber,
    });

    res.status(201).json(`createdUser: ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrond: ${err}`);
  }
};

module.exports = createUser;
