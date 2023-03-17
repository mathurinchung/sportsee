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

Nav.propTypes = {
  children: PropTypes.array.isRequired
};

export default Nav;