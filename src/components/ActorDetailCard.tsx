import { Card, ListGroup } from "react-bootstrap";
import type { ActorDetails } from "../services/movieAPI.types";
import { Link } from "react-router";

interface ActorProps {
  actor: ActorDetails;
}

const ActorDetailCard: React.FC<ActorProps> = ({ actor }) => {
  return (
    <Card className="person-card d-flex flex-row flex-wrap">
      <div className="person-image">
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
        />
      </div>
      <Card.Body className="d-flex flex-column person-info">
        <Card.Title className="person-title">{actor.name}</Card.Title>
        <ListGroup variant="flush" className="mb-3">
          <ListGroup.Item>Birth-Year: {actor.birthday}</ListGroup.Item>
          {actor.deathday && (
            <ListGroup.Item>Death day: {actor.deathday}</ListGroup.Item>
          )}
          <ListGroup.Item>
            Place of birth: {actor.place_of_birth}
          </ListGroup.Item>
          <ListGroup.Item>
            Known for: {actor.known_for_department}
          </ListGroup.Item>
          <ListGroup.Item>
            Average voting:{" "}
            {actor?.popularity ? (actor.popularity * 10).toFixed(0) : ""}%
          </ListGroup.Item>
        </ListGroup>
        <Card.Text>{actor.biography}</Card.Text>

        <div className="mt-3">
          <Card.Title className="movie-title">Known for:</Card.Title>
          {actor.combined_credits?.cast?.length ? (
            <ListGroup>
              {actor.combined_credits.cast.slice(0, 10).map((film) => (
                <ListGroup.Item
                  className="listButton"
                  action
                  as={Link}
                  key={film.id}
                  to={`/films/${film.id}`}
                >
                  <span className="film-title">
                    {film.original_title || film.name}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No known films found for this actor.</p>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActorDetailCard;
