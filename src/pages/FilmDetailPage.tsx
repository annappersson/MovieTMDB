import { useParams } from "react-router";
import useFilm from "../hooks/useFilm";
import { Alert } from "react-bootstrap";
import FilmDetailCard from "../components/FilmDetailCard";

const FilmDetailPage = () => {
  console.log("FilmDetailPage mounted");
  const { movieId } = useParams<{ movieId: string }>();
  const { data, error, isError, isLoading } = useFilm(Number(movieId));

  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  if (!data && !isLoading)
    return <Alert variant="warning">No data found 😢</Alert>;

  return (
    <>
      {data && (
        <div className="FilmDetail-Container">
          <FilmDetailCard key={data.id} film={data} />
        </div>
      )}
    </>
  );
};

export default FilmDetailPage;
