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
router.post("/agregarservicios", (req, res) => {
    const nuevoservicio = new ModeloServicio({
        nombre: req.body.nombre,
        correo: req.body.correo,
        birth: req.body.birth,
        contraseña: req.body.contraseña,
        idServicio: req.body.idServicio,
    })

    nuevoservicio.save(function(err){
        if(!err){
            res.send("Usuario fue almacenado con exito")
        }else{
            res.send("El usuario no pudo ser capturado")
        }
    })
})

//Ruta para obtener datos de la BD//
router.get("/listarusuarios", (req, res)  =>{
    ModeloServicio.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})