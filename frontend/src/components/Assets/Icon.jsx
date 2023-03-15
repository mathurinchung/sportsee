import PropTypes from 'prop-types';

function Icon({ className }) {
  return (
    <i className={ className }></i>
  );
}

Icon.propTypes = {
  className: PropTypes.string.isRequired
};

export default Icon;