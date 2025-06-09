import type { Genre } from "../services/movieAPI.types";

interface GenreListItemProps {
  genres: Genre;
}

const GenreListItem: React.FC<GenreListItemProps> = ({ genres }) => {
  return (
    <li className="list-group-item">
      <span className="genre-title">{genres.name}</span>
    </li>
  );
};

export default GenreListItem;
