import { Row } from "react-bootstrap";
import type { Genre } from "../services/movieAPI.types";
import GenreListItem from "./GenreListItem";

interface GenreListProps {
  genres: Genre[];
}

const GenreList: React.FC<GenreListProps> = ({ genres }) => {
  return (
    <Row xs={2} sm={3} md={4} lg={6} className="g-3 genreList">
      {genres.map((genre) => (
        <GenreListItem key={genre.id} genres={genre} />
      ))}
    </Row>
  );
};
export default GenreList;
