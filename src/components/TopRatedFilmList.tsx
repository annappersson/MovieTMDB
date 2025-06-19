import { Card, ListGroup } from "react-bootstrap";
import type { FilmDetail } from "../services/movieAPI.types";
import "../assets/PopularFilm.scss";
import { Link } from "react-router";
import NotFoundImage from "../assets/img/No-Image.png";

interface TopRatedFilmProps {
  films: FilmDetail[];
}

const TopRatedFilmList: React.FC<TopRatedFilmProps> = ({ films }) => {
  return (
    <div className="now-scroll-container">
      {films.map((film) => (
        <Link
          to={`/movie/${film.id}`}
          key={film.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div id="now-film-card">
            <Card>
              <Card.Img
                variant="top"
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                    : NotFoundImage
                }
                alt="{film_original_title} poster"
              />

              <Card.Body>
                <Card.Title style={{ fontSize: "0.9rem" }}>
                  {film.original_title || film.title || film.name || "Untitled"}
                </Card.Title>
                <ListGroup.Item className="text-muted">
                  Release Date: {film.release_date}
                </ListGroup.Item>
              </Card.Body>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopRatedFilmList;
