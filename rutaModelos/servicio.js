const { response } = require("express")
const express  =  require("express")
const router = express.Router()
const mongoose = require("mongoose")

const esquema  =  mongoose.Schema

const esqServicio = new esquema({
    nombre: String,
    correo: String,
    birth: String,
    contraseña: String,
    idServicio: String,

})

const ModeloServicio =  mongoose.model("servicio", esqServicio)
module.exports = router


/* Ruta de prueba
router.get("/prueba", (req, res) =>{
    res.end("Recibiendo desde servicio por node")
})
*/
//Rutas de modelo servicio//
router.post("/agregar-servicios", (req, res) => {
    const nuevoservicio = new ModeloServicio({
        nombre: req.body.nombre,
        correo: req.body.correo,
        birth: req.body.birth,
        contraseña: req.body.contraseña,
        idServicio: req.body.idServicio,
    })
})