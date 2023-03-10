import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './moviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, original_title }) => (
    <Link
      key={id}
      to={`/movies/${id}`}
      className={style.moviesItem}
      state={{ from: location }}
    >
      <li>{title || original_title}</li>
    </Link>
  ));
  return <ul className={style.moviesList}>{elements}</ul>;
};

export default memo(MoviesList);

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_title: PropTypes.string,
    })
  ).isRequired,
};
