import PropTypes from 'prop-types';

function Main({ className, children }) {
  return (
    <main id="Main" className={ className }>
      { children }
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Main;