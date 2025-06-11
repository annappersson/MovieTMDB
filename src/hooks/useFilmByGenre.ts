import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const useFilmByGenres = (genreId: number) => {
  return useQuery({
    queryKey: ["filmByGenre", genreId],
    queryFn: () => filmAPI.getFilmByGenre(genreId),
    enabled: !!genreId,
  });
};

export default useFilmByGenres;
