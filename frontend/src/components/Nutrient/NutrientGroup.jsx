import PropTypes from 'prop-types';
import NutrientCard from './NutrientCard';
import { formatNumber } from '../../utils/format';

function NutrientGroup({ data }) {
  return (
    <>
      <NutrientCard className="Calorie" icon="energy" data={ formatNumber(data.calorieCount) + "kCal" } type="Calories" />
      <NutrientCard className="Protein" icon="chicken" data={ data.proteinCount + "g" } type="Proteines" />
      <NutrientCard className="Carbohydrate" icon="apple" data={ data.carbohydrateCount + "g" } type="Glucides" />
      <NutrientCard className="Lipid" icon="cheeseburger" data={ data.lipidCount + "g" } type="Lipides" />
    </>
  );
}

NutrientGroup.propTypes = {
  data: PropTypes.object
};

export default NutrientGroup;