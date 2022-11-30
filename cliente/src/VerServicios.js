import React from "react"
import {Link} from "react-router-dom"

function VerServicios({usuario}){
    return(
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Contraseña</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.idServicio}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.correo}</td>
                        <td>{usuario.birth}</td>
                        <td>{usuario.constraseña}</td>
                        <td>
                            <link to={`/editar-servicios/${usuario.idServicio}`}>
                                <button type="button" class="btn btn-primary">Editar</button>
                            </link>
                            
                            &nbsp;
                            <button type="button" class="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default VerServicios