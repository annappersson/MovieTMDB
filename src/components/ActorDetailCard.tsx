import { Card, ListGroup } from "react-bootstrap";
import type { ActorDetails } from "../services/movieAPI.types";
import { Link } from "react-router";
import "../assets/ActorDetail.scss";
import NotFoundImage from "../assets/img/No-Image.png";

interface ActorProps {
  actor: ActorDetails;
}

const ActorDetailCard: React.FC<ActorProps> = ({ actor }) => {
  return (
    <Card className="actor-detail-card">
      <div className="actor-detail-content">
        <div className="actor-image">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
            alt={actor.name}
          />
        </div>

        <div className="actor-info">
          <Card.Body>
            <Card.Title className="actor-name">{actor.name}</Card.Title>
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
          </Card.Body>
        </div>
      </div>

      <div className="actor-movie-list mt-4">
        <h4>Known for:</h4>
        {actor?.combined_credits?.cast?.length > 0 ? (
          <div className="horizontal-scroll">
            {actor.combined_credits.cast.map((film) => (
              <div key={film.id} className="movie-card">
                <Link to={`/movie/${film.id}`}>
                  <img
                    src={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                        : NotFoundImage
                    }
                    alt={film.title}
                  />
                  <p className="movie-title">
                    {film.original_title ||
                      film.title ||
                      film.name ||
                      "Untitled"}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No known films found for this actor</p>
        )}
      </div>
    </Card>
  );
};

export default ActorDetailCard;
