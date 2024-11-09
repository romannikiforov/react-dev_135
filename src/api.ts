const key = import.meta.env.VITE_MOVIE_API;
const URL = `https://api.themoviedb.org/3/`;

type ApiResponse<T> = Promise<["success", T] | ["error", string]>;

export async function fetchData<TResponse>(
  url: string,
  rest: string = ""
): ApiResponse<TResponse> {
  const fetchURL = URL + `${url}&api_key=${key}&${rest}`;

  try {
    const res = await fetch(fetchURL);
    if (!res.ok) {
      return ["error", "Bad request in OK"];
    }
    const result: TResponse = await res.json();
    return ["success", result];
  } catch (err) {
    if (err instanceof Error) {
      return ["error", err.message];
    }
    return ["error", "An error occurred"];
  }
}
