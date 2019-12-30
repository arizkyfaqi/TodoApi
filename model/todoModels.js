const mongoose = require('mongoose');

//mengambil fungsi sekema dari modul mongoose
const Schema = mongoose.Schema;

//membuat colection untuk menyimpan nilai nama dan status
let TodoSchema = Schema ({
    name: {type:String},
    done: {type:Boolean}
})

//export
module.exports = mongoose.model("Todos", TodoSchema)