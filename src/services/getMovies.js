import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '633bd9c8c9bc68a8c4a40449237d5fcd',
  },
});

export const searchMovies = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMoviesDetails = async id => {
  const data = await instance.get(`/movie/${id}`);
  return data;
};

export const getMoviesAdditionally = async (id, req = '') => {
  const { data } = await instance.get(`/movie/${id}${req}`);
  return data;
};
