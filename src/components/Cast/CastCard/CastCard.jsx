import { memo } from 'react';
import PropTypes from 'prop-types';
import css from './cast.module.scss';
import defaultAvatar from '../../../images/defaultAvatar.jpeg';

const CastCard = ({ cast }) => {
    const cards = cast.map(({ id, profile_path, name, character }) => { 
        return (
          <li key={id} className={css.item}>
            <img
              loading="lazy"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultAvatar
              }
              alt={name}
              className={css.image}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        );}
  );

  return <ul className={css.list}>{cards}</ul>;
};

export default memo(CastCard);

CastCard.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
