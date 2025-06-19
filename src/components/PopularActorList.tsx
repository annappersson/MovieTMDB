import { Card, ListGroup, Nav } from "react-bootstrap";
import type { PopularActor } from "../services/movieAPI.types";
import { NavLink } from "react-router";
import NotFoundImage from "../assets/img/No-Image.png";
import "../assets/PopularActorList.scss";

interface ActorProps {
  actor: PopularActor;
}

const PopularActorList: React.FC<ActorProps> = ({ actor }) => {
  return (
    <Card className="popular-actor-card">
      <Card.Body className="d-flex flex-column">
        <div className="film-card-image">
          <Card.Img
            variant="top"
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : NotFoundImage
            }
            alt={actor.name}
          />
        </div>
        <Card.Title>{actor.name}</Card.Title>
        <ListGroup variant="flush" className="mb-3">
          <ListGroup.Item>
            Known for:{" "}
            {actor.known_for.map((item, index) => (
              <span key={item.id || index}>
                {item.original_title || item.title}
                {index < actor.known_for.length - 1 ? ", " : ""}
              </span>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            Average voting:{" "}
            {actor?.popularity ? (actor.popularity * 10).toFixed(0) : ""}%
          </ListGroup.Item>
        </ListGroup>

        <div className="mt-auto">
          <Nav.Link
            id="FilmListBtn"
            as={NavLink}
            key={actor.id}
            to={`/person/${actor.id}`}
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

export default PopularActorList;
