const isEmailExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json("Email Required");
  }

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    res.status(404).json("User found");
  } else {
    next();
  }
};

module.exports = isEmailExist;
