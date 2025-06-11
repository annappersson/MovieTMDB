import { Route, Routes } from "react-router";
import GenreListPage from "./pages/GenreListPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import "./assets/App.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FilmsByGenre from "./pages/FilmsByGenre";

function App() {
  return (
    <div id="app">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genres" element={<GenreListPage />} />
        <Route path="/genre/:genreId" element={<FilmsByGenre />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ReactQueryDevtools />
    </div>
  );
}

export default App;
