import './App.css';
import MostrarProyectos from './componente1';

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
        <MostrarProyectos></MostrarProyectos>
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
