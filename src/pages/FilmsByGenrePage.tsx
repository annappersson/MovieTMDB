import { useParams, useSearchParams } from "react-router";
import useFilmByGenres from "../hooks/useFilmByGenre";
import useGenres from "../hooks/useGenres";
import { Alert } from "react-bootstrap";
import FilmListCard from "../components/FilmListCard";
import Pagination from "../components/Pagination";

const FilmsByGenre = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { genreId } = useParams<{ genreId: string }>();
  const {
    data: films,
    error,
    isError,
  } = useFilmByGenres(Number(genreId), page);
  const { data, isLoading } = useGenres();

  if (!data && !isLoading) {
    return <Alert variant="warning">No data found 😢</Alert>;
  }

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  const genreName =
    data?.genres?.find((g) => g.id.toString() === genreId)?.name ??
    "Unknown Genre";

  return (
    <>
      <title>{genreName}</title>
      {isError && <Alert>{error.message}</Alert>}

      {films && films?.results.length > 0 && (
        <>
          <h2>{genreName}</h2>
          <div className="GenreListContainer">
            {films?.results
              .filter((film) => !film.adult)
              .map((film) => (
                <FilmListCard key={film.id} film={film} />
              ))}
          </div>
          <div id="buttons">
            <Pagination
              page={page}
              totalPages={films.total_pages}
              hasPreviousPage={page > 1}
              hasNextPage={page < films.total_pages}
              onPreviousPage={() => handlePageChange(page - 1)}
              onNextPage={() => handlePageChange(page + 1)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FilmsByGenre;
