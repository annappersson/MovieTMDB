export interface Genre {
  id: number;
  name: string;
}

export interface GenreResponse {
  genres: Genre[];
}

export interface FilmDetail {
  id: number;
  name: string;
  adult: false;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  genre_ids: number[];
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  title: string;
  popularity: string;
  status: string;
  tagline: string;
  credits: {
    cast: ActorDetails[];
  };
}

export interface NowPlayingResponse {
  results: FilmDetail[];
}

export interface PopularFilmResponse {
  results: FilmDetail[];
}

export interface TopRatedFilmResponse {
  results: FilmDetail[];
}

//the Films actors
export interface CreditsResponse {
  id: number;
  cast: ActorDetails[];
}

export interface ActorDetails {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  deathday: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string; //this is Img path
  known_for_department: string;
  combined_credits: {
    cast: FilmDetail[];
  };
}

export interface PopularActor {
  id: number;
  name: string;
  profile_path: string | null;
  known_for: FilmDetail[];
  popularity: number;
}

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
