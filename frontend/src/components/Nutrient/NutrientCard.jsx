import PropTypes from 'prop-types';
import { Icon } from '../Assets';

/**
 * NutrientCard is a React functional component that renders a nutrient card with
 * an icon and information about the nutrient.
 *
 * @param { Object } props.data - The nutrient data to be displayed.
 * @param { string } props.data.icon - The icon of the nutrient.
 * @param { number } props.data.value - The value of the nutrient.
 * @param { string } props.data.key - The type of the nutrient.
 * @returns { JSX.Element } A React JSX element that represents the NutrientCard component.
 */
function NutrientCard({ data }) {
  return (
    <div className={ `Card NutrientCard ${ data.icon }` }>
      <div className="icon-nutrient">
        <Icon className={ `icon-${ data.icon }` } />
      </div>

      <div className="info-nutrient">
        <span className="data-nutrient">{ data.value }</span>
        <span className="type-nutrient">{ data.key }</span>
      </div>
    </div>
  );
}

// Define the prop types for the component
NutrientCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default NutrientCard;