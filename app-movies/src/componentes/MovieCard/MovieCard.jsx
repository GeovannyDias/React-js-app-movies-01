import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
// import placeholder from "../../assets/placeholder.jpg";
import { getMovieImage } from "../../utils/getMovieImage";

export function MovieCard({ movie }) {
  //   console.log(styles); // estilos con clase aleatoria para no contaminar el front
  // const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  // const pathImage = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  // const imageUrl = movie.poster_path ? pathImage : placeholder;

  const imageUrl = getMovieImage(300, movie.poster_path);

  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          src={imageUrl}
          alt={movie.original_title}
          width={300}
          height={450}
          className={styles.movieImage}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
