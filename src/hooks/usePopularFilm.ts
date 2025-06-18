import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const usePopularFilm = () => {
  return useQuery({
    queryKey: ["PopularFilm"],
    queryFn: filmAPI.getPopularFilm,
  });
};

export default usePopularFilm;
