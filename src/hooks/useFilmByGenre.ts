import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const useFilmByGenres = (genreId: number, page: number) => {
  return useQuery({
    queryKey: ["filmByGenre", genreId, page],
    queryFn: () => filmAPI.getFilmByGenre(genreId, page),
    enabled: !!genreId,
  });
};

export default useFilmByGenres;
