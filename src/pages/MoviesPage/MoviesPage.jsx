import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import MoviesSearchForm from 'modules/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'modules/MoviesList/MoviesList';
import { searchMovies } from 'services/getMovies';

import style from './moviesPage.module.css';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const data = await searchMovies(search);
        setItems([...data.results]);
      } catch ({ responce }) {
        Notiflix.Notify.failure('An error occurred');
        console.log(responce.data.message);
      }
    };
    fetchMovies();
  }, [search, setItems]);

  const onSearchMovies = ({ search }) => {
    setSearchParams(search);
  };

  return (
    <div className={style.search_block}>
      <MoviesSearchForm onSubmit={onSearchMovies} />
      <MoviesList items={items} />
    </div>
  );
};

export default MoviesPage;
