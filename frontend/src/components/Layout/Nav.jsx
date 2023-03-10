import PropTypes from 'prop-types';

function Nav({ children }) {
  return (
    <nav>
      <ul>
        { children }
      </ul>
    </nav>
  );
}

export default Nav;

Nav.propTypes = {
  children: PropTypes.element
}