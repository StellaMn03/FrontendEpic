const express = require("express");
const app = express();
app.use(express.json());
function validateRequest(req, res, next) {
  const { username, email, password } = req.body;
  const errors = [];
  if (!username || username.length < 3) {
    errors.push("At least 3 characters for username");
  }
  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailReg.test(email)) {
    errors.push("Invalid email");
  }
  if (!password || password.length < 6) {
    errors.push("At least 6 characters for password");
  }
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  next();
}
app.post("/users", validateRequest, (req, res) => {
  res.status(201).json({ message: "User created" });
});
app.listen(3000, () => {
  console.log("server runs at 3000");
});
