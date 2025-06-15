import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const useFilm = (filmId: number) => {
  console.log("useFilm - filmId:", filmId);
  return useQuery({
    queryKey: ["filmById", filmId],
    queryFn: () => filmAPI.getFilmById(filmId),
    enabled: !!filmId,
  });
};

export default useFilm;
