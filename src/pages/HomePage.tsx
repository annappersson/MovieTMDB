import { Alert } from "react-bootstrap";
import usePopularFilm from "../hooks/usePopularFilm";
import PopularFilmList from "../components/PopularFilmList";
import NowPlayingList from "../components/NowPlayingList";
import useNowPlaying from "../hooks/useNowPlaying";
import TopRatedFilmList from "../components/TopRatedFilmList";
import useTopRatedFilm from "../hooks/useTopRatedFilm";

const HomePage = () => {
  const { data: popularData, isLoading, isError, error } = usePopularFilm();
  const { data: nowPlayingData } = useNowPlaying();
  const { data: topRatedData } = useTopRatedFilm();

  if (isError) return <Alert variant="danger"> {error.message}</Alert>;
  if (!popularData && !isLoading) return <p>No films found.</p>;
  if (!nowPlayingData && !isLoading) return <p>No films found.</p>;
  if (!topRatedData && !isLoading) return <p>No films found.</p>;

  return (
    <div className="homeContainer">
      <div className="Popular-container">
        {" "}
        <h2>Popular Movies</h2>
        {popularData && <PopularFilmList films={popularData.results} />}
      </div>

      <div className="NowPlaying-Container">
        {" "}
        <h2>Now playing Movies</h2>
        {nowPlayingData && <NowPlayingList films={nowPlayingData.results} />}
      </div>
      <div className="TopRated-Container">
        {" "}
        <h2>Top rated Movies</h2>
        {topRatedData && <TopRatedFilmList films={topRatedData.results} />}
      </div>
    </div>
  );
};

export default HomePage;
