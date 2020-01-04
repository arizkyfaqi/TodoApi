const Todos = require("../model/todoModels")

exports.test =function(req, res){
    res.send("Ini udah bener komunikasi antar model controller dan route")
}

exports.create = function(req, res){
    let todos = new Todos({
        name: req.body.name,
        done: false
    });
    todos.save(function(err){
        if(err){
            return next(err)
        }
        res.send("Sukses dibikin")
    })
};