import PropTypes from 'prop-types';

function Icon({ className }) {
  return (
    <i className={ className }></i>
  );
}

export default Icon;

Icon.propTypes = {
  className: PropTypes.string
};