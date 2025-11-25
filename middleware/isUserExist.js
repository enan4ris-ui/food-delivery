const isUserExist = async (req, res, next) => {
  const { email } = req.body;

  const test = {};

  test.name = "elbeg";

  if (!email) {
    res.status(404).json("Email Required");
  }

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    res.status(404).json("User not found");
  } else {
    next();
  }
};

module.exports = isUserExist;
