const UserModel = require("../../schemas/userSchema");

const deleteUser = async (req, res) => {
  const { id } = req.body;
  //   console.log(id, "heasdfas");

  try {
    await UserModel.findOneAndDelete(id);

    res.status(200).json(`user deleted`);
  } catch (err) {
    res.status(500).json(`Something went wrond: ${err}`);
  }
};

module.exports = deleteUser;
