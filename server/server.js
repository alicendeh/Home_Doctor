const express = require("express");
const DataBase = require("./config/database");

const app = express();

DataBase();

app.use("/HomeDoctor/users", require("./routes/users"));

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server Succesfully Started on Port ${PORT}`);
});
