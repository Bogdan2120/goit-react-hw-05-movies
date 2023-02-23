import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import noPhoto from 'img/no_photo.jpg';

const CastList = ({ cast }, { loading }) => {
  if (!cast) {
    return;
  }

  const elements = cast.map(({ cast_id, profile_path, name, character }) => (
    <li key={cast_id}>
      <img
        alt="actors"
        width="120px"
        src={
          profile_path
            ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`
            : noPhoto
        }
      />
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </li>
  ));
  return (
    <ul>
      {loading
        ? Notiflix.Loading.standard('Loading...')
        : Notiflix.Loading.remove()}
      {cast.length === 0 ? (
        <p>Nobody auditioned for this movie &#128528;</p>
      ) : (
        elements
      )}
    </ul>
  );
};

export default CastList;

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
};
