import { memo } from 'react';
import PropTypes from 'prop-types';
import css from './review.module.scss';

const Review = ({ items }) => {
  const cards = items.map(({ id, author, content }) => {
    return (
      <li key={id} className={css.item}>
        <h3 className={css.name}>Author: {author}</h3>
        <p>{content}</p>
      </li>
    );
  });

  return <ul className={css.list}>{cards}</ul>;
};

export default memo(Review);

Review.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};
