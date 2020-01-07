const Todos = require("../model/todoModels")

exports.test =function(req, res){
    res.send("Ini udah bener komunikasi antar model controller dan route")
}

exports.create = function(req, res){
    //inisialisasi todos diabil dari Todos ("../model/todoModels")
    let todos = new Todos({
        //value name diabli dari value yg di dapat dari body
        name: req.body.name,
        //field done di set false
        done: false
    });
    //save data todo
    todos.save(function(err){
        if(err){
            return next(err)
        }
        res.send("Sukses dibikin")
    })
}

exports.todoShow = function(req, res){
    //find berfungsi untuk menemukan data
    Todos.find({}, function(err, todos){
        if(err){
            return next(err)
        }
        //menampilkan data todos
        res.send(todos)
    })
}

exports.todoDetails = function(req, res){
    // menampikan detail data sesuai id parameter
    Todos.findById(req.params.id, function(err, todos){
        if(err){
            return next(err)
        }
        res.send(todos)
    })
}

exports.todoUpdate = function(req, res){
    //findByIdAndUpdate untuk menemukan param.id lalu mengupdate nya, sesuai nilai yg di inputkan pada body
    Todos.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err){
        if(err){
            return next(err)
        }
        res.send("Update berhasil!")
    })
}

exports.todoDelete = function(req, res){
    //menghapus data sesuai dengan id pada parameter
    Todos.findByIdAndDelete(req.params.id, function(err){
        if(err){
            return next(err)
        }
        res.send("Delete berhasil!")
    })
}