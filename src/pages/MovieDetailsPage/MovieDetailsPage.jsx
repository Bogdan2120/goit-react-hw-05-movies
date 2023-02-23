import {
  Outlet,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { getMoviesDetails } from '../../services/getMovies';
import poster from '../../img/no-poster-available.webp';

import style from './singleMoviePage.module.css';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? '/';

  const voteAverageShort = (movieDetails.vote_average * 10).toFixed(0);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const {
          data: {
            original_title = 'n/a',
            poster_path,
            vote_average,
            overview,
            release_date: release_date_slice = 'n/a',
            genres: genres_map,
          },
        } = await getMoviesDetails(id);

        const result = {
          original_title,
          poster_path: poster_path
            ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`
            : null,
          vote_average,
          overview,
          release_date: release_date_slice.slice(0, 4),
          genres: genres_map.map(gen => gen.name).join(', '),
        };
        setMovieDetails(result);
      } catch ({ responce }) {
        Notiflix.Notify.failure('An error occurred');
        console.log(responce.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const goBack = () => {
    navigate(from);
  };

  return (
    <>
      {loading
        ? Notiflix.Loading.standard('Loading...')
        : Notiflix.Loading.remove()}
      <button className={style.btn} onClick={goBack}>
        &#x21A9; Go back
      </button>
      <div className={style.movie_details}>
        <img
          alt="movie poster"
          src={movieDetails.poster_path ? movieDetails.poster_path : poster}
        />
        <div className={style.descr_block}>
          <h1>
            {movieDetails?.original_title} ({movieDetails?.release_date})
          </h1>
          <p>User Score: {voteAverageShort}%</p>
          <p>Overview: {movieDetails?.overview}</p>
          <p>Genres: {movieDetails?.genres}</p>
        </div>
      </div>
      <ul className={style.underline_light}>
        <p>Additionaly information:</p>
        <Link to="cast" state={{ from }}>
          <li>Cast</li>
        </Link>
        <Link to="reviews" state={{ from }}>
          <li>Reviews</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
