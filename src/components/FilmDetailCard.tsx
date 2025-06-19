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
              <ListGroup.Item>
                Genres:
                {film.genres.map((genre) => (
                  <Link
                    to={`/genre/${genre.id}`}
                    key={genre.id}
                    className="genre-link"
                  >
                    <span>
                      {" "}
                      {genre.name}
                      {", "}
                    </span>
                  </Link>
                ))}
              </ListGroup.Item>
              <ListGroup.Item>Status: {film.status}</ListGroup.Item>
              <ListGroup.Item>Release Date: {film.release_date}</ListGroup.Item>
              <ListGroup.Item>Runtime: {film.runtime} min</ListGroup.Item>
              <ListGroup.Item>
                Budget: ${film.budget.toLocaleString()}
              </ListGroup.Item>
              <ListGroup.Item>
                Rating:{" "}
                {film?.vote_average ? (film.vote_average * 10).toFixed(0) : ""}%
              </ListGroup.Item>
              <ListGroup.Item>
                tagline:
                <span className="font-monospace"> {film.tagline}</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div className="actor-in-movie-list mt-4">
          <h4>Actors in movie:</h4>
          {film.credits?.cast && film.credits.cast.length > 0 ? (
            <div className="horizontal-scroll">
              {film.credits.cast.map((actor) => (
                <div key={actor.id} className="actor-card">
                  <Link to={`/person/${actor.id}`}>
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                          : NotFoundImage
                      }
                      alt={actor.name}
                    />
                    <p className="actor-title">{actor.name || "Untitled"}</p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No actors found for this movie</p>
          )}
        </div>
      </Card>
    </>
  );
};

export default FilmDetailCard;
