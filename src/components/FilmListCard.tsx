import { Card, ListGroup, Nav } from "react-bootstrap";
import type { FilmDetail } from "../services/movieAPI.types";
import { NavLink } from "react-router";

interface FilmDetailProps {
  film: FilmDetail;
}

const FilmListCard: React.FC<FilmDetailProps> = ({ film }) => {
  return (
    <Card>
      <Card.Body className="d-flex flex-column">
        <div className="film-card-image">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
          />
        </div>
        <Card.Title>{film.original_title}</Card.Title>
        <ListGroup variant="flush" className="mb-3">
          <ListGroup.Item>Runtime: {film.runtime}</ListGroup.Item>
          <ListGroup.Item>
            Average voting:{" "}
            {film?.vote_average ? (film.vote_average * 10).toFixed(0) : ""}%
          </ListGroup.Item>
        </ListGroup>

        <div className="mt-auto">
          <Nav.Link
            id="FilmListBtn"
            as={NavLink}
            key={film.id}
            to={`/movie/${film.id}`}
            className="btn btn-secondary w-100"
            role="button"
          >
            Read more
          </Nav.Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FilmListCard;
