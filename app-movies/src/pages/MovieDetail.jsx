import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../componentes/Spinner/Spinner";
import { getMovivies } from "../services/httpClient";
import { getMovieImage } from "../utils/getMovieImage";
// import movie from "./movie.json";
import styles from "./MovieDetail.module.css";

export function MovieDetail() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const path = "/movie/" + movieId;
    getMovivies(path).then((data) => {
      setIsLoading(false);
      setMovie(data);
      // console.log(data);
    });
  }, [movieId]); // Este efecto depende de movieId, si cambia esa variable se ejecute el efecto

  if (isLoading) return <Spinner />;

  if (!movie) return null; // Primero se carga el componente luego se elecuta el efecto
  // return !movie? null : (<div></div>);

  // const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  const imageUrl = getMovieImage(500, movie.poster_path);

  return !movie ? null : (
    <div className={styles.detailContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Gengeres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
