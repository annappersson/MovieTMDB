import axios from "axios";
import type { Genre } from "./movieAPI.types";

const base_URL = "https://api.themoviedb.org/3" || "http://localhost:3000";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const fakeDelay = 1500;

const instance = axios.create({
  baseURL: base_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: apiKey,
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
    `/genre/movie/list?api_key=${apiKey}&language=sv-SE`
  );
  return data.genres;
};

//get All movies

//get one movie

//get all people

//get one person
