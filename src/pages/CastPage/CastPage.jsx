import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { getMoviesAdditionally } from 'services/getMovies';
import CastList from 'modules/CastList/CastList';

const CastPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMoviesAdditionally(id, '/credits');
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

  return <CastList cast={movieDetails.cast} loading={loading} />;
};

export default CastPage;
