import { Alert, Col, Nav, Row } from "react-bootstrap";
import useGenres from "../hooks/useGenres";
import { Link } from "react-router";
import "../assets/GenreListPage.scss";
import LoadingSpinner from "../components/LoadingSpinner";

export const GenreListPage = () => {
  const { data: genres, error, isError, isLoading } = useGenres();

  return (
    <>
      <title>Film Genres</title>

      {isError && <Alert>{error.message}</Alert>}

      {isLoading && <LoadingSpinner />}

      {genres && genres.length > 0 && (
        <div className="GenreListContainer">
          <h1>Genres</h1>

          <Row xs={2} sm={3} md={4} lg={6} className="g-3">
            {genres.map((genre) => (
              <Col key={genre.id}>
                <Nav.Link
                  as={Link}
                  to={`/genre/${genre.id}`}
                  id="GenreBtn"
                  className="btn w-100"
                  title={genre.name}
                >
                  {genre.name}
                </Nav.Link>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {genres && genres.length === 0 && (
        <Alert variant="warning">no genres? 🥺</Alert>
      )}
    </>
  );
};

export default GenreListPage;
