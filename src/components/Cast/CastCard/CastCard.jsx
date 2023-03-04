import { memo } from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../../images/defaultAvatar.jpeg';

const CastCard = ({ cast }) => {
    const cards = cast.map(({ id, profile_path, name, character }) => { 
        return (
          <li key={id}>
            <img
              loading="lazy"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultAvatar
              }
              alt={name}
            />
            <h2>
              {name}
                </h2>
                <p>
                    Character: {character}
                </p>
          </li>
        );
  });

  return <ul>{cards}</ul>;
};

export default memo(CastCard);

CastCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
