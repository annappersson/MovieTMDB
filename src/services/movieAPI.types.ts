export interface Genre {
  id: number;
  name: string;
}

export interface FilmByGenre {
  page: number;
  results: FilmDetail[];
  total_pages: number;
  total_results: number;
}

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
  title: string;
}
