import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const useActor = (actorId: number) => {
  return useQuery({
    queryKey: ["Actor", actorId],
    queryFn: () => filmAPI.getActorById(actorId),
    enabled: !!actorId,
  });
};

export default useActor;
