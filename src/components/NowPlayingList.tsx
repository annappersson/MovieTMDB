import { Card, ListGroup } from "react-bootstrap";
import type { NowPlaying } from "../services/movieAPI.types";
import "../assets/PopularFilm.scss";
import { Link } from "react-router";

interface NowFilmProps {
  films: NowPlaying[];
}

const NowPlayingList: React.FC<NowFilmProps> = ({ films }) => {
  return (
    <div className="now-scroll-container">
      {films.map((film) => (
        <div key={film.id} className="now-film-card">
          <Card>
            <Link to={`/movie/${film.id}`} key={film.id}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                alt="{film_original_title} poster"
              />
            </Link>
            <Card.Body>
              <Card.Title style={{ fontSize: "0.9rem" }}>
                {film.title}
              </Card.Title>
              <ListGroup.Item className="mb-2 text-muted">
                Release Date: {film.release_date}
              </ListGroup.Item>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default NowPlayingList;
