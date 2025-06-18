import { useParams } from "react-router";
import useFilmByGenres from "../hooks/useFilmByGenre";
import useGenres from "../hooks/useGenres";
import { Alert } from "react-bootstrap";
import FilmListCard from "../components/FilmListCard";
import Pagination from "../components/Pagination";
import { useState } from "react";

const FilmsByGenre = () => {
  const [page, setPage] = useState(1);
  const { genreId } = useParams<{ genreId: string }>();
  const {
    data: films,
    error,
    isError,
  } = useFilmByGenres(Number(genreId), page);
  const { data } = useGenres();

  if (!data) {
    return;
  }

  const genre = data.genres?.find((g) => g.id.toString() === genreId);
  const genreName = genre ? genre.name : "Unknown Genre";

  return (
    <>
      {isError && <Alert>{error.message}</Alert>}

      {films && films?.results.length > 0 && (
        <>
          <h2>{genreName}</h2>
          <div className="GenreListContainer">
            {films?.results.map((film) => (
              <FilmListCard key={film.id} film={film} />
            ))}
          </div>
          <div id="buttons">
            <Pagination
              page={films.page}
              totalPages={films.total_pages}
              hasPreviousPage={page > 1}
              hasNextPage={page < films.total_pages}
              onPreviousPage={() => setPage((p) => p - 1)}
              onNextPage={() => setPage((p) => p + 1)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FilmsByGenre;
