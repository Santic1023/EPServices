const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/")

const objectdb = mongoose.connection

objectdb.on("connected", ()=>{console.log("Conexion establecida.")})
objectdb.on("error", ()=>{console.log("Error en la conexion.")})

module.exports = mongoose