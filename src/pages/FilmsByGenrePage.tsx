import { Link, useParams } from "react-router";
import useFilmByGenres from "../hooks/useFilmByGenre";
import useGenres from "../hooks/useGenres";
import { Alert, Col, Row } from "react-bootstrap";
import FilmListCard from "../components/FilmListCard";

const FilmsByGenre = () => {
  const { genreId } = useParams<{ genreId: string }>();
  const { data: films, error, isError } = useFilmByGenres(Number(genreId));
  const { data } = useGenres();

  if (!data) {
    return;
  }

  const genre = data.genres?.find((g) => g.id.toString() === genreId);
  const genreName = genre ? genre.name : "Unknown Genre";

  return (
    <>
      {isError && <Alert>{error.message}</Alert>}

      {films && films?.results.length > 0 && (
        <div className="GenreListContainer">
          <h2>{genreName}</h2>
          <Row>
            {films?.results.map((film) => (
              <FilmListCard key={film.id} film={film} />
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default FilmsByGenre;
