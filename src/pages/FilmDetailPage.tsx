import { useParams } from "react-router";
import useFilm from "../hooks/useFilm";
import { Alert } from "react-bootstrap";
import FilmDetailCard from "../components/FilmDetailCard";
import "../assets/FilmDetailCard.scss";

const FilmDetailPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data, error, isError, isLoading } = useFilm(Number(movieId));

  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  if (!data && !isLoading)
    return <Alert variant="warning">No data found 😢</Alert>;

  return (
    <>
      <title>{data?.original_title || data?.title || data?.name}</title>
      {data && (
        <div className="Film-Container">
          <FilmDetailCard key={data.id} film={data} />
        </div>
      )}
    </>
  );
};

export default FilmDetailPage;
