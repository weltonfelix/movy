import axios from 'axios';

const api = axios.create({
  baseURL: process.env.TMDB_API_URL,
  params: { api_key: process.env.TMDB_API_KEY },
});

interface getMoviesResponse {
  results: {
    id: number;
    original_title: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
  }[];
}

export async function getMovies(query: string) {
  const response = await api.get('search/movie', {
    params: { query, include_adult: false },
  });

  return response.data.results.map((result: any) => ({
    id: result.id,
    title: result.original_title,
    year: result.release_date.substring(0, 4),
    imageUri: 'https://image.tmdb.org/t/p/w92'.concat(
      result.poster_path || result.backdrop_path
    ),
  }));
}

export { api };
