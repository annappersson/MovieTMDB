import { Alert, ListGroup } from "react-bootstrap";
import useGenres from "../hooks/useGenres";
import { Link } from "react-router";
import "../assets/GenreListPage.scss";

export const GenreListPage = () => {
  const { data: genres, error, isError, isLoading } = useGenres();

  return (
    <>
      <title>Film Genres</title>

      {isError && <Alert>{error.message}</Alert>}

      {isLoading && <p>Loading genres...</p>}

      {genres && genres.length > 0 && (
        <>
          <ListGroup className="Genrelist">
            {genres.map((genre) => (
              <ListGroup.Item
                action
                as={Link}
                key={genre.id}
                to={`/genre/${genre.id}`}
              >
                <span className="genre-name">{genre.name}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}

      {genres && genres.length === 0 && (
        <Alert variant="warning">no genres? 🥺</Alert>
      )}
    </>
  );
};

export default GenreListPage;
