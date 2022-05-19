const express = require("express");
const app = express();
const cors = require('cors');
const signup = require('./Routes/signup');
const signin = require('./Routes/signin');
require('dotenv').config();


app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello! World!");
});

app.use("/signup", signup);
app.use("/signin", signin);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
});

