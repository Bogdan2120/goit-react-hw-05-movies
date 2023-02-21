import { useState, useEffect } from 'react';

import MoviesList from 'shared/components/MoviesList';
import { getMovies } from 'shared/services/getMovies';

const Movies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        const { results } = data;
        setItems([...results]);
      } catch ({ responce }) {
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

export default Movies;
