import PropTypes from 'prop-types';

function Main({ className, children }) {
  return (
    <main id="Main" className={ className }>
      { children }
    </main>
  );
}

export default Main;

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
}