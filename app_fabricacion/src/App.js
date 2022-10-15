import './App.css';

function App() {
  return (
    <div className="App">
      <header className="cabecera">
        <h1>App de fabricación</h1>  
      </header>
      <nav className="menu">
        <ul>
          <li>Proyectos Activos</li>
          <li>Planos</li>
          <li>Materiales</li>
          <li>Procesos Activos</li>
        </ul>
      </nav>
      <main>
        <p>Aquí debemos agregar por ejemplo información sobre la base de datos sobre los proyectos</p>
      </main>
      <footer>
        <br></br>
        <details>
          <summary>Integrantes del equipo:</summary>
          <ul>
            <li>Héctor Iván Meza Ojeda</li>
            <li>Leonardo Francisco Pacheco</li>
            <li>Iván Diaz Sandoval</li>
            <li>Reyes Fernando Vazquez Valdivia</li>
          </ul>
        </details>

      </footer>


    </div>
  );
}

export default App;
