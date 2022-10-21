import './App.css';
import {MostrarProyectos} from './componente1.js';

function App() {
  return (
    <div className="App">
      <header className="cabecera">
        <h1>App de fabricación</h1>  
      </header>
     
      <section id= "hoja_de_trabajo">
      <h2>Listado de Obras:</h2>;
        <MostrarProyectos
        proyectoid='001'
        estado='activo'
        descripcion='Proyecto Puente "miraflores" en construcción y sus materiales'
        materiales='Varilla, cemento, block'
        planos='Planos001'
        />
        <MostrarProyectos 
        proyectoid='002'
        estado='activo' 
        descripcion='Proyecto tramo carretero km07 y sus materiales requeridos'
        materiales='Varilla, cemento, block'
        planos='Planos002'
        />
        <MostrarProyectos
        proyectoid='003'
        estado='activo'
        descripcion='Construcción edificio tda autoservicio, materiales y planos requeridos'
        materiales='Varilla, cemento, block'
        planos='Planos003'
        />
        <MostrarProyectos
        proyectoid='004'
        estado='pausado'
        descripcion='N/A'
        materiales='Varilla, cemento, block'
        planos='Planos004'
        />
      </section>
      <footer>
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
