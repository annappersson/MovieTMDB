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

function App() {
  return (
    <div id="app">
      <Navigation />

      <GlobalLoadingSpinner />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genre/:genreId" element={<FilmsByGenrePage />} />
        <Route path="/movie/:movieId" element={<FilmDetailPage />} />
        <Route path="/actors/:actorId" element={<ActorDetailPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ReactQueryDevtools />
    </div>
  );
}

export default App;
