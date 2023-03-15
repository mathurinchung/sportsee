import PropTypes from 'prop-types';

function HeaderProfile({ data }) {
  return (
    <header>
      <h2>Bonjour <span className="firstname">{ data.firstName }</span></h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

HeaderProfile.propTypes = {
  data: PropTypes.object
};

export default HeaderProfile;