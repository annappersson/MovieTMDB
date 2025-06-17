import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const usePopularActors = (page: number = 1) => {
  return useQuery({
    queryKey: ["popularActors", page],
    queryFn: () => filmAPI.getPopularActors(page),
  });
};

export default usePopularActors;
