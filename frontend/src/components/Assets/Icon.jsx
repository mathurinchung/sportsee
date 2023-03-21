import PropTypes from 'prop-types';

/**
 * Renders an <i> element with the given className prop.
 * @param { Object } props - The component props.
 * @param { string } props.className - The class name to apply to the <i> element.
 * @returns { JSX.Element } - A React JSX element representing an <i> element.
 */

function Icon({ className }) {
  return (
    <i className={ className }></i>
  );
}

/**
 * Defines the expected prop types for the Icon component.
 * @type { Object }
 * @property { string } className - The class name to apply to the <i> element.
 */
Icon.propTypes = {
  className: PropTypes.string.isRequired
};

export default Icon;