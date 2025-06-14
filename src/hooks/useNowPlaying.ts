import { useQuery } from "@tanstack/react-query";
import * as filmAPI from "../services/movieAPI";

const useNowPlaying = () => {
  return useQuery({
    queryKey: ["NowPlaying"],
    queryFn: filmAPI.getNowPlayingFilms,
  });
};

export default useNowPlaying;
