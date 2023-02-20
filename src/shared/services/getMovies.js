import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '633bd9c8c9bc68a8c4a40449237d5fcd',
  },
});

export const searchMovies = async (query, page = 1) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return data;
};

export const getMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMoviesDetails = async id => {
  const {
    data: {
      original_title = 'n/a',
      poster_path,
      vote_average,
      overview,
      release_date: release_date_slice = 'n/a',
      genres: genres_map,
    },
  } = await instance.get(`/movie/${id}`);

  const requestDetails = {
    original_title,
    poster_path: poster_path
      ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`
      : null,
    vote_average,
    overview,
    release_date: release_date_slice.slice(0, 4),
    genres: genres_map.map(gen => gen.name).join(', '),
  };

  return requestDetails;
};

export const getMoviesAdditionally = async (id, req = '') => {
  const { data } = await instance.get(`/movie/${id}${req}`);
  return data;
};
