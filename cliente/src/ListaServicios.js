import axios from "axios"
import React, { useEffect, useState } from "react"
import VerServicios from "./VerServicios"

function ListaServicios(){
    const [datausuarios, Setdatausuarios] =  useState([])

    useEffect(() =>{
        axios.get("/api/servicio/listarusuarios").then(res =>{
            console.log(res.data)
            Setdatausuarios(res.data)
        }).catch(err =>{
            console.log(err)
        })
    })
    
    //Mapeo de datos BD//
    const listausuarios = datausuarios.map(usuario =>{
            return (
                <div>
                    <VerServicios usuario={usuario}/>
                </div>
            )
    })

    return(
        <div>
        <h2>Ver Servicios - ciclo 4</h2>
        {listausuarios}
        </div>
    )
}

export default ListaServicios