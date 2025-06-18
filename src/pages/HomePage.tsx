import { Alert } from "react-bootstrap";
import usePopularFilm from "../hooks/usePopularFilm";
import PopularFilmList from "../components/PopularFilmList";
import NowPlayingList from "../components/NowPlayingList";
import useNowPlaying from "../hooks/useNowPlaying";

const HomePage = () => {
  const { data, isLoading, isError, error } = usePopularFilm();
  const { data: film } = useNowPlaying();

  if (isError) return <Alert variant="danger"> {error.message}</Alert>;
  if (!data && !isLoading) return <p>No films found.</p>;
  if (!film && !isLoading) return <p>No films found.</p>;

  return (
    <div className="homeContainer">
      <div className="Popular-container">
        {" "}
        <h2>Popular Movies</h2>
        {data && <PopularFilmList films={data.results} />}
      </div>

      <div className="NowPlaying-Container">
        {" "}
        <h2>Now playing Movies</h2>
        {film && <NowPlayingList films={film.results} />}
      </div>
      <div className="TopRated-Container">here be top rated</div>
    </div>
  );
};

export default HomePage;
