import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import css from './back.module.scss';

const BackLink = ({ to }) => {
  return (
    <Link to={to} className={css.link}>
      <IoIosArrowRoundBack size="24" />
      <p>Go back</p>
    </Link>
  );
};

export default BackLink;