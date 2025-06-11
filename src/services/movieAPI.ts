import axios from "axios";
import type { FilmByGenre, Genre } from "./movieAPI.types";

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
export const getGenres = async () => {
  const data = await get<{ genres: Genre[] }>(
    `/genre/movie/list?language=en-US&include_adult=false`
  );
  return data.genres;
};

//get All movies by genere
export const getFilmByGenre = async (genreId: number) => {
  const data = await get<FilmByGenre>(
    `/discover/movie?language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${genreId}`
  );
  return data.results;
};

//get one movie

//get all people

//get one person
