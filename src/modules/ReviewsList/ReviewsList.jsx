import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

const ReviewsList = ({ results }, { loading }) => {
  if (!results) {
    return;
  }

  const elements = results.map(({ id, author, content }) => (
    <li key={id}>
      <p>Author: {author}</p>
      <p>Reviews: {content}</p>
    </li>
  ));

  return (
    <ul>
      {loading
        ? Notiflix.Loading.standard('Loading...')
        : Notiflix.Loading.remove()}
      {results.length === 0 ? (
        <p>No one wants to watch this movie &#128528;</p>
      ) : (
        elements
      )}
    </ul>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
};
