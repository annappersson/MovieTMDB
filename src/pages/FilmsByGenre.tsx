import { useParams } from "react-router";
import useFilmByGenres from "../hooks/useFilmByGenre";
import useGenres from "../hooks/useGenres";
import LoadingSpinner from "../components/LoadingSpinner";
import { Alert, Col, Row } from "react-bootstrap";

const FilmsByGenre = () => {
  const { genreId } = useParams<{ genreId: string }>();
  const {
    data: films,
    error,
    isError,
    isLoading,
  } = useFilmByGenres(Number(genreId));
  const { data: genres } = useGenres();

  const genre = genres?.find((g) => g.id.toString() === genreId);
  const genreName = genre ? genre.name : "Unknown Genre";

  return (
    <>
      {isError && <Alert>{error.message}</Alert>}

      {isLoading && <LoadingSpinner />}

      <h2>{genreName}</h2>
      <Row>
        {films?.map((film) => (
          <Col key={film.id} sm={10} md={4} lg={2} className="mb-4">
            <span>{film.title}</span>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FilmsByGenre;
