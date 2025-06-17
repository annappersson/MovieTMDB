import { Card, ListGroup } from "react-bootstrap";
import type { FilmDetail } from "../services/movieAPI.types";
import { Link } from "react-router";

interface FilmDetailProps {
  film: FilmDetail;
}

const FilmDetailCard: React.FC<FilmDetailProps> = ({ film }) => {
  return (
    <>
      <div className="FilmDetail-Container">
        <Card>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
          />
          <Card.Body>
            <Card.Title>{film.original_title}</Card.Title>
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
        </Card>

        <div className="mt-3">
          <Card.Title className="actor-title">Actors in movie:</Card.Title>

          {film.credits?.cast && film.credits.cast.length > 0 ? (
            <ListGroup>
              {film.credits.cast.map((actor) => (
                <ListGroup.Item
                  className="listButton"
                  action
                  as={Link}
                  key={actor.id}
                  to={`/actors/${actor.id}`}
                >
                  <span className="film-title">{actor.name}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No actors found for this film.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FilmDetailCard;
