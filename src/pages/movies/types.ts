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

export type MovieConfigType = {
  images: {
    base_url: string;
  };
};

export type MovieGenreType = {
  id: number;
  name: string;
};

export type GenresResponseType = {
  genres: MovieGenreType[];
};
