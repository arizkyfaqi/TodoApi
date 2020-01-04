const express = require("express");
const bodyParser = require("body-parser");
const todos = require("./routes/todoRoutes");
const app = express();
 
app.use("/api", todos);
app.listen(3000, () => console.log('Server is Running at port : 3000'))