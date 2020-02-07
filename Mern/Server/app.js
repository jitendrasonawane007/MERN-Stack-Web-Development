/*
Created By Jitendras On 01-02-2020
*/

require("dotenv").config();
let express = require("express");
let app = express();
let util = require("util");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth.routes");
// app.use(bodyParser.json());

/******************************************************************/
app.use(express.json());
/******************************************************************/
/*Route middle ware*/
app.use("/api/user", authRoute);
/******************************************************************/
app.listen(port, () => {
  console.log(`running on the port ${port}`);
});
/******************************************************************/
