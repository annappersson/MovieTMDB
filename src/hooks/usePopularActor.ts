import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const usePopularActors = (page: number) => {
  console.log("Fetching popular actors for page", page);
  return useQuery({
    queryKey: ["popularActors", page],
    queryFn: () => filmAPI.getPopularActors(page),
  });
};

export default usePopularActors;
