import { memo } from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import defaultPoster from '../../images/defaultPoster.jpg'
import css from './list.module.scss';

const MoviesList = ({ items }) => {
    const location = useLocation();

    const movies = items.map(({ id, poster_path, title, release_date }) => {
        const year = release_date.slice(0, 4);
        return (
          <Link
            key={id}
            to={`/movies/${id}`}
            state={{ from: location }}
            className={css.link}
          >
            <li className={css.item}>
              <img
                loading="lazy"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultPoster
                }
                alt={title}
                className={css.image}
              />
              <h2 className={css.title}>
                {title} {year && <span>({year})</span>}
              </h2>
            </li>
          </Link>
        );});
    
    return (
        <ul className={css.list}>
            {movies}
        </ul>
    );
}

export default memo(MoviesList);

MoviesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
};