const express = require("express");
const app = express();
const sanitizeInput = (req, res, next) => {
  for (let key in req.body) {
    if (typeof req.body[key] === "string") {
      req.body[key] = req.body[key].trim();
      if (key === "email") {
        req.body[key] = req.body[key].toLowerCase();
      }
    }
  }
  next();
};

app.use(express.json());
app.use(sanitizeInput);
app.post("/users", (req, res) => {
  res.status(200).json({ message: "User created", info: req.body });
});
app.put("/users", (req, res) => {
  res.status(200).json({ message: "User updated", info: req.body });
});
app.listen(5000, () => {
  console.log("Server is running on 5000");
});
