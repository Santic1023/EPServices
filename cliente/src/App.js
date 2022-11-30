//Applicacion inicial basica//
import './App.css';
import ListaServicios from "./ListaServicios.js";
import EditarServicios from "./EditarServicios";
import EliminarServicios from "./EliminarServicios"
import AgregarServicios from "./AgregarServicios"
//Libreras para el manejo de datos//
import {Browser, Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
          <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Barra de busquedas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Ver Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/agregar-servicios">Agregar Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/editar-servicios">Editar Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/eliminar-servicios">Eliminar Servicios</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaServicios/>} exact></Route>
          <Route path='/agregar-servicios' element={<AgregarServicios/>} exact></Route>
          <Route path='/editar-servicios' element={<EditarServicios/>} exact></Route>
          <Route path='/eliminar-servicios' element={<EliminarServicios/>} exact></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
