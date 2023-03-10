import PropTypes from 'prop-types';
import NutrientCard from './NutrientCard';

function NutrientGroup({ keyData }) {
  return keyData === undefined ? null : (
    <>
      <NutrientCard className="Calorie" icon="energy" data={ keyData.calorieCount + "kCal" } type="Calories" />
      <NutrientCard className="Protein" icon="chicken" data={ keyData.proteinCount + "g" } type="Proteines" />
      <NutrientCard className="Carbohydrate" icon="apple" data={ keyData.carbohydrateCount + "g" } type="Glucides" />
      <NutrientCard className="Lipid" icon="cheeseburger" data={ keyData.lipidCount + "g" } type="Lipides" />
    </>
  );
}

export default NutrientGroup;

NutrientGroup.propTypes = {
  keyData: PropTypes.object
}