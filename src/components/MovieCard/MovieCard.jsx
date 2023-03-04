import defaultPoster from '../../images/defaultPoster.jpg';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    const {
        poster_path,
        title,
        release_date,
        overview,
        genres,
        vote_average } = movie;
    
    return (
      <section>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultPoster
          }
          alt={title}
        />
        <div>
          <h2>
            {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
          </h2>
          <p>User Score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
        </div>
      </section>
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