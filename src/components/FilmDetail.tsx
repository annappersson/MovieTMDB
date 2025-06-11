import type { FilmDetail } from "../services/movieAPI.types";

interface FilmDetailProps {
  film: FilmDetail[];
}

const FilmDetail: React.FC<FilmDetailProps> = ({ film }) => {
  return <div>FilmDetail</div>;
};

export default FilmDetail;
