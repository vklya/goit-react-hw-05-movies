import { memo } from 'react';
import PropTypes from 'prop-types';

const Review = ({ reviews }) => {
    const cards = reviews.map(({ id, author, content }) => {
      return (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      );
    });

  return <ul>{cards}</ul>;
};

export default memo(Review);

Review.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};
