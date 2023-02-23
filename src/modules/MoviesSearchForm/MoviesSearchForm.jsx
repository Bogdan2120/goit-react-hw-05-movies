import { memo } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import style from './moviesSearch.module.css';

const MoviesSearchForm = ({ onSubmit }) => {
  const [query, setQuerye] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuerye(value);
  };

  const handleSubmit = e => {
    e.preventdefault();
    if (query === '') {
      return Notiflix.Notify.failure('Enter text and try again');
    }
    onSubmit(query);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Search</label>
        <input
          className={style.search_input}
          value={query}
          onChange={handleChange}
          name="search"
          placeholder="Search movie"
          required
        />
        <button className={style.search_btn} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default memo(MoviesSearchForm);

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
