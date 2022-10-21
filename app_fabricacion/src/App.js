import './App.css';
import {MostrarProyectos} from './componente1.js';

function App() {
  return (
    <div className="App">
      <header className="cabecera">
        <h1>App de fabricación</h1>  
      </header>
      <nav className="menu">
        <ul>
         <li id="boton1" >Proyectos Activos</li>
         <li>Planos</li>
         <li>Materiales</li>
         <li>Procesos</li>
        </ul>
      </nav>
      <section id= "hoja_de_trabajo">
      <h5>Listado de proyectos:</h5>;
        <MostrarProyectos
        proyectoid='001'
        estado='activo'
        descripcion='Proyecto Puente "miraflores" en construcción y sus materiales'
        />
        <MostrarProyectos 
        proyectoid='002'
        estado='activo' 
        descripcion='Proyecto tramo carretero km07 y sus materiales requeridos'
        />
        <MostrarProyectos
        proyectoid='003'
        estado='activo'
        descripcion='Construcción edificio tda autoservicio, materiales y planos requeridos'
        />
        <MostrarProyectos
        proyectoid='004'
        estado='pausado'
        descripcion='N/A'
        />
      </section>
      <footer>
        <br></br>
        Integrantes del equipo:
          <ul>
            <li>Héctor Iván Meza Ojeda</li>
            <li>Leonardo Francisco Pacheco</li>
            <li>Iván Diaz Sandoval</li>
            <li>Reyes Fernando Vazquez Valdivia</li>
          </ul>
      </footer>


    </div>
  );
}

export default App;
