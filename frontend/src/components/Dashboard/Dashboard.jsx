import PropTypes from 'prop-types';

function Dashboard({ children }) {
  return (
    <section className="Dashboard">
      { children }
    </section>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node
};

export default Dashboard;