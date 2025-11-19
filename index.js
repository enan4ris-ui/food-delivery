const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userSchema");

const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());

connectToDB();

// app.get("/", );

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello world, working");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
