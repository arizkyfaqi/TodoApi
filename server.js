const express = require("express");
const bodyParser = require("body-parser");
const todos = require("./routes/todoRoutes");
const mongoose = require("mongoose");

//if not exist create DB todoapi 
let mongourl = "mongodb://localhost:27017/todoapi";

const mongoDB = mongourl;
//connect to todo api DB
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
//check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error, cek koneksi")); 

const app = express();

//konversion to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//for route
app.use("/api", todos); 

app.listen(3000, () => console.log('Server is Running at port : 3000'))