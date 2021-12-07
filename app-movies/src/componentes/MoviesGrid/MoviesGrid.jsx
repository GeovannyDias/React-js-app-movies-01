import { useEffect, useState } from "react";
// import { useQuery } from "../../hooks/useQuery";
import { getMovivies } from "../../services/httpClient";
import { MovieCard } from "../MovieCard/MovieCard";
import { Spinner } from "../Spinner/Spinner";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../Empty/Empty";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1); // Controla páginas de API
  const [hasMore, setHasMore] = useState(true); // Valida si existe mas páginas en el API

  // const query = useQuery(); // Hook personalizado
  // const search = query.get("search");

  // No se pude hacer llamada a APIs externas dentro del componente por ser una funcion, usar HOOK useEfect
  // Se ejecuta como un efecto secundario, hace llamadas async
  // useEffect(() => {
  //   setIsLoading(true);

  //   const pathSearch = "/search/movie?query=" + search;
  //   const pathMovies = "/discover/movie";
  //   const path = search ? pathSearch : pathMovies;

  //   getMovivies(path).then((data) => {
  //     // movies = data.results;
  //     setMovies(data.results);
  //     setIsLoading(false);
  //     console.log(data);
  //   });
  // }, [search]);

  useEffect(() => {
    setIsLoading(true);

    const pathSearch = `/search/movie?query=${search}&page=${page}`;
    const pathMovies = `/discover/movie?page=${page}`;
    const path = search ? pathSearch : pathMovies;

    getMovivies(path).then((data) => {
      // movies = data.results;
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  // if (isLoading) return <Spinner />;

  if (!isLoading && movies.length === 0) return <Empty />; // Si no hay resultados

  return (
    <InfiniteScroll
      dataLength={movies.length} //This is important field to render the next data
      next={() => setPage((prevPage) => prevPage + 1)} // Si se va a cambiar el estado a partir de un estado anterior se utliza una funcion
      hasMore={hasMore} // Si es TRUE hará el llamada a una nueva página
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </InfiniteScroll>
  );
}

// Arrow function si se tiene una sola linea de codigo se puede
// eliminar el return
