import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { getMoviesAdditionally } from 'services/getMovies';
import ReviewsList from 'modules/ReviewsList/ReviewsList';

const ReviewsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMoviesAdditionally(id, '/reviews');
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

  return <ReviewsList results={movieDetails.results} loading={loading} />;
};

export default ReviewsPage;
