import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const useActor = (actorId: number, page: number = 1) => {
  return useQuery({
    queryKey: ["Actor", actorId, page],
    queryFn: () => filmAPI.getActor(actorId, page),
    enabled: !!actorId,
  });
};

export default useActor;
