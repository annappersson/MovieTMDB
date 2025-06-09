import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: filmAPI.getGenres,
  });
};

export default useGenres;
