import defaultPoster from '../../images/defaultPoster.jpg';
import PropTypes from 'prop-types';
import css from './card.module.scss';

const MovieCard = ({ movie }) => {
    const {
        poster_path,
        title,
        release_date,
        overview,
        genres,
        vote_average } = movie;
    
  return (
    <>
      <section className={css.section}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultPoster
          }
          alt={title}
          className={css.image}
        />
        <div className={css.info}>
          <h1 className={css.gap}>
            {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
          </h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2 className={css.gap}>Overview</h2>
          <p>{overview}</p>
          <h3 className={css.gap}>Genres</h3>
          {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
        </div>
      </section>
    </>
  );
}

export default MovieCard;

MovieCard.propTypes = {
    data: PropTypes.object,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    vote_average: PropTypes.number,
};