const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World! lol");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
