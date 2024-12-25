const express = require("express");
const app = express();
const logger = (req, res, next) => {
  const timestamp = new Date().toString();
  console.log(`[${timestamp}] Method: ${req.method}, URL: ${req.url}`);
  next();
};

app.use(logger);
app.get("/users", (req, res) => {
  res.send("List of users");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
