import PropTypes from 'prop-types';

/**
 * A React functional component representing the navigation menu of the web application.
 *
 * @function
 * @param { array } props.children - The child components to be rendered within the navigation menu.
 * @returns { JSX.Element } JSX element representing the navigation menu.
 */
function Nav({ children }) {
  return (
    <nav>
      <ul>
        { children }
      </ul>
    </nav>
  );
}

// Define the prop types for the component
Nav.propTypes = {
  children: PropTypes.array.isRequired
};

export default Nav;