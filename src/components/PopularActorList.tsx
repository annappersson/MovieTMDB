import { Card, ListGroup } from "react-bootstrap";
import type { PopularActor } from "../services/movieAPI.types";

interface ActorProps {
  actor: PopularActor;
}

const PopularActorList: React.FC<ActorProps> = ({ actor }) => {
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
          <ListGroup.Item>
            Known for:{" "}
            {actor.known_for.map((item, index) => (
              <span key={item.id || index}>
                {item.original_title || item.name}
                {index < actor.known_for.length - 1 ? ", " : ""}
              </span>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            Average voting:{" "}
            {actor?.popularity ? (actor.popularity * 10).toFixed(0) : ""}%
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PopularActorList;
