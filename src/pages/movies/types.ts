export type MovieType = {
  id: number;
  title: string;
  poster_path: string;
};

export type MovieResponseType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
