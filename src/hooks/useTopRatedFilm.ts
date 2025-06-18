import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const useTopRatedFilm = () => {
  return useQuery({
    queryKey: ["topRatedFilm"],
    queryFn: filmAPI.getTopRatedFilm,
  });
};

export default useTopRatedFilm;
