const express = require("express");
const bodyParser = require("body-parser");
const todos = require("./routes/todoRoutes");
const mongoose = riquire("mongoose");
const app = express();

let mongourl = "mongodb://localhost:27017/todoapi";

const mongoDB = mongourl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.conection;
db.on("error", console.error.bind(console, "Connection Error, cek koneksi")); 

app.use("/api", todos);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.listen(3000, () => console.log('Server is Running at port : 3000'))