import { Route, Routes } from "react-router";
import GenreListPage from "./pages/GenreListPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import "./assets/App.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FilmsByGenrePage from "./pages/FilmsByGenrePage";
import FilmDetailPage from "./pages/FilmDetailPage";
import GlobalLoadingSpinner from "./components/spinners/GlobalLoadingSpinner";

function App() {
  return (
    <div id="app">
      <Navigation />

      <GlobalLoadingSpinner />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genres" element={<GenreListPage />} />
        <Route path="/genre/:genreId" element={<FilmsByGenrePage />} />
        <Route path="/movie/:movieId" element={<FilmDetailPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ReactQueryDevtools />
    </div>
  );
}

export default App;
