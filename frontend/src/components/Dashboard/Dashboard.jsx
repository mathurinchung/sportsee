import PropTypes from 'prop-types';

/**
 * Represents a Dashboard component.
 * @function
 * @param { Object } props - The props object for the component.
 * @param { Node } props.children - The child elements to be rendered inside the Dashboard component.
 * @returns { JSX.Element } - The JSX element representing the Dashboard component.
 */
function Dashboard({ children }) {
  return (
    <section className="Dashboard">
      { children }
    </section>
  );
}

// Define the prop types for the component
Dashboard.propTypes = {
  children: PropTypes.node.isRequired
};

export default Dashboard;