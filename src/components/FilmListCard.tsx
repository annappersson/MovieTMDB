import { Card, ListGroup, Nav } from "react-bootstrap";
import type { FilmDetail } from "../services/movieAPI.types";
import { NavLink } from "react-router";
import "../assets/FilmListPage.scss";
import NotFoundImage from "../assets/img/No-Image.png";

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
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                : NotFoundImage
            }
            alt={film.original_title}
          />
        </div>
        <Card.Title>
          {film.original_title || film.title || film.name || "Untitled"}
        </Card.Title>
        <ListGroup variant="flush" className="mb-3">
          <ListGroup.Item>Release date: {film.release_date}</ListGroup.Item>
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
