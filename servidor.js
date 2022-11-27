const express = require("express")
const App=express()
const files = require("./conexion")

//importar rutas y modelos//
const rutaServicio = require("./rutaModelos/servicio")

//importar body parser//
const bodyParser = require("body-parser")
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: "true"}))

App.use("/api/servicio", rutaServicio)

App.get("/", (req, res)=>{ 
    res.end("El servidor se ha iniciado en la parte grafica")
})

//Configuraciones Servidor//
App.listen(5000, function(){
    console.log("El servidor se ha iniciado.")
})