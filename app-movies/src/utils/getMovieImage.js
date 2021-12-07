// Seleccionar todo el string Ctrl + . convertir a template string
// Tambie se puede enviar el ancho de la imgen por parámetro
import placeholder from "../assets/placeholder.jpg";

export function getMovieImage(width, poster_path) {
  // const pathImage = "https://image.tmdb.org/t/p/w300" + width + poster_path;

  const pathImage = `https://image.tmdb.org/t/p/w${width}${poster_path}`;
  const imageUrl = poster_path ? pathImage : placeholder;
  return imageUrl;
}
