const Todos = require("../model/todoModels")

exports.test =function(req, res){
    res.send("Ini udah bener komunikasi antar model controller dan route")
}