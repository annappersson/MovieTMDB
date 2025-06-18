import axios from "axios";
import type {
  ActorDetails,
  FilmDetail,
  GenreResponse,
  NowPlayingResponse,
  PaginatedResponse,
  PopularActor,
  PopularFilmResponse,
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
  return get<PaginatedResponse<FilmDetail>>(
    `/discover/movie?with_genres=${genreId}&page=${page}`
  );
};

export const getNowPlayingFilms = () => {
  return get<NowPlayingResponse>(`/movie/now_playing`);
};

export const getPopularFilm = () => {
  return get<PopularFilmResponse>(`/movie/popular`);
};

//get one movie
export const getFilmById = (FilmId: number) => {
  return get<FilmDetail>(`/movie/${FilmId}?append_to_response=credits`);
};

//get one person
export const getActor = (personId: number) => {
  return get<ActorDetails[]>(
    `/person/${personId}?append_to_response=combined_credits`
  );
};

export const getActorById = (actorId: number) => {
  return get<ActorDetails>(`/person/${actorId}`);
};

export const getPopularActors = (page: number = 1) => {
  return get<PaginatedResponse<PopularActor>>(`/person/popular?page=${page}`);
};
