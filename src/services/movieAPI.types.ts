export interface Genre {
  id: number;
  name: string;
}

//films by genre
export interface FilmByGenre {
  page: number;
  results: FilmDetail[];
  total_pages: number;
  total_results: number;
}

//film details
export interface FilmDetail {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  title: string;
}

// used by tex /movie/now_playing, /movie/top_rated m.m
export interface FilmListResponse {
  page: number;
  results: FilmDetail[];
  total_pages: number;
  total_results: number;
}

//the Films actors
export interface CreditsResponse {
  id: number;
  cast: ActorDetails[];
  crew: CrewMember[];
}

//the crew on the movie (duh)
export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string; //this is Img path
}

//actor detail
export interface ActorDetails {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  place_of_birth: string;
  profile_path: string; //this is Img path
  known_for_department: string;
}

//films one actor is in
export interface ActorMovieCredits {
  cast: FilmDetail[];
  crew: CrewMember[];
  id: number;
}
