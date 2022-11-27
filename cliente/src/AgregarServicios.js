import React, { useState } from "react"
import uniqid from "uniqid"
import axios from "axios"

function AgregarServicios(){

    //hooks//
    const [nombre, setnombre] = useState("")
    const [correo, setcorreo] = useState("")
    const [birth, setbirth] = useState("")
    const [contraseña, setcontraseña] = useState("")

    function agregarServicio(){
            var servicio = {
                nombre:nombre,
                correo:correo,
                birth:birth,
                contraseña:contraseña,
                idServicio: uniqid()
            }

            console.log(servicio)
            axios.post("/api/servicio/agregarservicios", servicio )
            .then(res =>  {
                alert(res.data)
            })
            .then(err => {console.log(err)})
    }

    return(

    <div className="container">
        <h2>Registro de Usuarios</h2>
            <div class="col-md-6">
                <label for="nombre" class="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => {setnombre(e.target.value)}}
                autoComplete="off"/>
            </div>

            <div class="col-md-5">
                <label for="correo" class="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="correo" value={correo} onChange={(e) => {setcorreo(e.target.value)}} 
                autoComplete="off"/>
            </div>

            <div class="col-md-3">
                <label for="birth" class="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="birth" value={birth} onChange={(e) => {setbirth(e.target.value)}}
                autoComplete="off"/>
            </div>

            <div class="col-md-4">
                <label for="contraseña" class="form-label">Contraseña</label>
                <input type="password" className="form-control" id="contraseña" value={contraseña} onChange={(e) => {setcontraseña(e.target.value)}}
                autoComplete="off"/>
            </div>

            <div class="col-12">
                <button onClick={agregarServicio} type="" class="btn btn-primary">Registrarse</button>
            </div>
    </div>
    )
}
export default AgregarServicios