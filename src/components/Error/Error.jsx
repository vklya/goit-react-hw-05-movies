import PropTypes from 'prop-types';

const Error = text => <p>{text}</p>;

export default Error;

Error.propTypes = {
    text: PropTypes.string,
}
