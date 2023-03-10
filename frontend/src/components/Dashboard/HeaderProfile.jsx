import PropTypes from 'prop-types';

function HeaderProfile({ userInfos }) {
  return (
    <header>
      <h2>Bonjour <span className="firstname">{ userInfos === undefined ? null : userInfos.firstName }</span></h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

export default HeaderProfile;

HeaderProfile.propTypes = {
  uqerInfos: PropTypes.object
}