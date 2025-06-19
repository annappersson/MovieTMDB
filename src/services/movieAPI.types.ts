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
  genres: GenreResponse[];
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
  credits: {
    cast: ActorDetails[];
  };
}

// export interface NowPlaying {
//   adult: false;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   orginal_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   vote_average: number;
//   vote_count: number;
// }

export interface NowPlayingResponse {
  results: FilmDetail[];
}

// export interface PopularFilm {
//   id: number;
//   poster_path: string;
//   original_title: string;
//   popularity: string;
//   release_date: string;
// }

export interface PopularFilmResponse {
  results: FilmDetail[];
}

// export interface TopRatedFilm {
//   id: number;
//   poster_path: string;
//   original_title: string;
//   popularity: string;
//   release_date: string;
// }

export interface TopRatedFilmResponse {
  results: FilmDetail[];
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
