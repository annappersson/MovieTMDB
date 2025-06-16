import axios from "axios";
import type {
  FilmByGenre,
  FilmDetail,
  FilmListResponse,
  GenreResponse,
  NowPlayingResponse,
} from "./movieAPI.types";

const base_URL = "https://api.themoviedb.org/3" || "http://localhost:3000";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const fakeDelay = 1500;

const instance = axios.create({
  baseURL: base_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

const get = async <T>(endpoint: string) => {
  const res = await instance.get<T>(endpoint);

  if (fakeDelay) {
    await new Promise((r) => setTimeout(r, fakeDelay));
  }
  return res.data;
};

//get all generes
export const getGenres = () => {
  return get<GenreResponse>(`/genre/movie/list`);
};

//get All movies by genere
export const getFilmByGenre = (genreId: number, page = 1) => {
  return get<FilmByGenre>(
    `/discover/movie?with_genres=${genreId}&page=${page}`
  );
};

export const getNowPlayingFilms = () => {
  return get<NowPlayingResponse>(`/movie/now_playing`);
};

//get one movie
export const getFilmById = (FilmId: number) => {
  return get<FilmDetail>(`/movie/${FilmId}`);
};

//get all people

//get one person
