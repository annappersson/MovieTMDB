import type { Genre } from "../services/movieAPI.types";
import GenreListItem from "./GenreListItem";

interface GenreListProps {
  genres: Genre[];
}

const GenreList: React.FC<GenreListProps> = ({ genres }) => {
  return (
    <ul className="genreList list-group">
      {genres.map((genre) => (
        <GenreListItem key={genre.id} genres={genre} />
      ))}
    </ul>
  );
};

export default GenreList;
