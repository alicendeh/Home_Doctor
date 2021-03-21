const express = require("express");
const DataBase = require("./config/database");

const app = express();

DataBase();

app.use(express.json({extended: false}))

app.use("/HomeDoctor/users", require("./routes/users"));
app.use("/HomeDoctor/auth", require("./routes/auth"));


const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server Succesfully Started on Port ${PORT}`);
});
