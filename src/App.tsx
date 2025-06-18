import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import "./assets/App.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FilmsByGenrePage from "./pages/FilmsByGenrePage";
import FilmDetailPage from "./pages/FilmDetailPage";
import GlobalLoadingSpinner from "./components/spinners/GlobalLoadingSpinner";
import ActorDetailPage from "./pages/ActorDetailPage";
import PopularActorPage from "./pages/PopularActorPage";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

function App() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const loading = isFetching + isMutating > 0;

  if (loading) {
    return <GlobalLoadingSpinner />;
  }

  return (
    <div id="app">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genre/:genreId" element={<FilmsByGenrePage />} />
        <Route path="/movie/:movieId" element={<FilmDetailPage />} />
        <Route path="/actors/:actorId" element={<ActorDetailPage />} />
        <Route path="/person/popular" element={<PopularActorPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ReactQueryDevtools />
    </div>
  );
}

export default App;
