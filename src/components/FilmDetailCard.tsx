import { Card, ListGroup } from "react-bootstrap";
import type { FilmDetail } from "../services/movieAPI.types";
import { Link } from "react-router";
import NotFoundImage from "../assets/img/No-Image.png";

interface FilmDetailProps {
  film: FilmDetail;
}

const FilmDetailCard: React.FC<FilmDetailProps> = ({ film }) => {
  return (
    <>
      <Card className="film-detail-card">
        <div className="film-top-section">
          <div className="film-poster-wrapper">
            <Card.Img
              variant="top"
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                  : NotFoundImage
              }
              alt={film.title}
              className="film-poster"
            />
          </div>

          <div className="film-info">
            <Card.Body>
              <Card.Title>
                {film.original_title || film.title || film.name || "Untitled"}
              </Card.Title>
              <Card.Text>{film.overview}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">About</Card.Subtitle>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Release Date: {film.release_date}</ListGroup.Item>
              <ListGroup.Item>Runtime: {film.runtime} min</ListGroup.Item>
              <ListGroup.Item>
                Budget: ${film.budget.toLocaleString()}
              </ListGroup.Item>
              <ListGroup.Item>
                Average voting:{" "}
                {film?.vote_average ? (film.vote_average * 10).toFixed(0) : ""}%
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div className="film-actors">
          <Card.Body>
            <Card.Title className="actor-title">Actors in movie:</Card.Title>
            {film.credits?.cast && film.credits.cast.length > 0 ? (
              <ListGroup>
                {film.credits.cast.map((actor) => (
                  <ListGroup.Item
                    className="listButton"
                    action
                    as={Link}
                    key={actor.id}
                    to={`/person/${actor.id}`}
                  >
                    <span className="film-title">{actor.name}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>No actors found for this film.</p>
            )}
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default FilmDetailCard;
