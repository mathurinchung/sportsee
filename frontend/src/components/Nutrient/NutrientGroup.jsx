import PropTypes from 'prop-types';
import { formatNumber } from '../../utils';
import NutrientCard from './NutrientCard';

/**
 * A component that displays a group of nutrient cards for given nutrient data.
 * 
 * @param { Object } props - The component props.
 * @param { Object } props.data - An object containing nutrient data.
 * @returns { JSX.Element } - The JSX element for rendering the component.
 */
function NutrientGroup({ data }) {
  /**
   * Maps each nutrient key to a corresponding nutrient card data object.
   * 
   * @function
   * @param { string } key - The nutrient key.
   * @returns { Object } - The nutrient card data object.
   */
  const nutrients = Object.keys(data).map(key => {
    switch (key) {
      case 'calorieCount': return { key: 'Calories', value: formatNumber(data[key]) + "kCal", icon: 'energy' };
      case 'proteinCount': return { key: 'Proteines', value: formatNumber(data[key]) + "g", icon: 'chicken' };
      case 'carbohydrateCount': return { key: 'Glucides', value: formatNumber(data[key]) + "g", icon: 'apple' };
      case 'lipidCount': return { key: 'Lipides', value: formatNumber(data[key]) + "g", icon: 'cheeseburger' };
      default: null;
    }
  });

  return (
    <>
      { nutrients.map((nutrient, index) => <NutrientCard key={ index } data={ nutrient } />) }
    </>
  );
}

// Define the prop types for the component
NutrientGroup.propTypes = {
  data: PropTypes.object.isRequired
};

export default NutrientGroup;