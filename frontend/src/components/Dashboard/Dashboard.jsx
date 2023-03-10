import PropTypes from 'prop-types';

function Dashboard({ children }) {
  return (
    <section className="Dashboard">
      { children }
    </section>
  );
}

export default Dashboard;

Dashboard.propTypes = {
  children: PropTypes.element
}