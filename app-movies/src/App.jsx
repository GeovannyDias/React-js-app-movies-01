// import { MoviesGrid } from "./componentes/Movies/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { LandingPage } from "./pages/landingPage";

export function App() {
  return (
    <Router>
      {/* <div> */}
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
        {/* <Link to="/movie">Movie - 2</Link> */}
      </header>

      <main>
        {/* <MoviesGrid /> */}
        <Switch>
          <Route exact path="/movie/:movieId">
            <MovieDetail />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
      {/* </div> */}
    </Router>
  );
}

// Si se exporta por default al cambiar el nombre del componente
// con F2 no se cambiara el nombre donde fue importado el componente
// Si se exporta por default se puede importar de la siguiente manera
// import as Geo "./Name" pero cambiar el nombre del componente es
// una mala practica

// export default function Name(params) {
//    return;
// }
