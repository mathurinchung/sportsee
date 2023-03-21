import PropTypes from 'prop-types';

/**
 * Represents a HeaderProfile component.
 * @function
 * @param { Object } props - The props object for the component.
 * @param { Object } props.data - The data object containing information to be displayed in the HeaderProfile component.
 * @param { string } props.data.firstName - The first name of the user to be displayed in the HeaderProfile component.
 */
function HeaderProfile({ data }) {
  return (
    <header>
      <h2>Bonjour <span className="firstname">{ data.firstName }</span></h2>

      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

// Define the prop types for the component
HeaderProfile.propTypes = {
  data: PropTypes.object.isRequired
};

export default HeaderProfile;