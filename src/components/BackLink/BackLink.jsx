import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

const BackLink = ({ to }) => {
  return (
    <Link to={to}>
      <IoIosArrowRoundBack size="24" />
      <p>Go back</p>
    </Link>
  );
};

export default BackLink;