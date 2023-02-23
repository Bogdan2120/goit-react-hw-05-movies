import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import MoviesList from 'modules/MoviesList/MoviesList';
import { getMovies } from 'services/getMovies';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        const { results } = data;
        setItems([...results]);
      } catch ({ responce }) {
        Notiflix.Notify.failure('An error occurred');
        console.log(responce.data.message);
      }
    };

    fetchMovies();
  }, [setItems]);
  return (
    <>
      <MoviesList items={items} />
    </>
  );
};

export default HomePage;
