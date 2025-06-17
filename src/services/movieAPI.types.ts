export interface Genre {
  id: number;
  name: string;
}

export interface GenreResponse {
  genres: Genre[];
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
  id: number;
  adult: false;
  backdrop_path: string;
  budget: number;
  genres: GenreResponse[];
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  title: string;
  credits: {
    cast: ActorDetails[];
    crew: CrewMember[];
  };
}

interface NowPlaying {
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  orginal_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface NowPlayingResponse {
  results: NowPlaying[];
}

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
  known_for: KnownFor[];
}

export interface KnownFor {
  id: number;
  original_title: string;
  name: string;
  media_type: string;
  overview: string;
  poster_path: string | null;
}
