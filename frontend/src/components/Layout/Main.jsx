import PropTypes from 'prop-types';

/**
 * A React functional component representing the main section of the web application.
 * @function
 * @param { object } props - The props object containing className and children properties.
 * @param { string } props.className - The CSS class name for the main section.
 * @param { node } props.children - The child components to be rendered within the main section.
 * @returns { JSX.Element } JSX element representing the main section.
 */
function Main({ className, children }) {
  return (
    <main id="Main" className={ className }>
      { children }
    </main>
  );
}

// Define the prop types for the component
Main.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Main;