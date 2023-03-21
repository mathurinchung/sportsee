import PropTypes from 'prop-types';
import { formatNumber } from '../../utils';
import NutrientCard from './NutrientCard';

function NutrientGroup({ data }) {
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

NutrientGroup.propTypes = {
  data: PropTypes.object.isRequired
};

export default NutrientGroup;