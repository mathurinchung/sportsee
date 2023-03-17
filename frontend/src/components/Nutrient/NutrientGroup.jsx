import PropTypes from 'prop-types';
import NutrientCard from './NutrientCard';

function NutrientGroup({ data }) {
  return (
    <>
      { Object.keys(data).map((key, index) => <NutrientCard key={ index } data={{ key, value: data[key] }} />) }
    </>
  );
}

NutrientGroup.propTypes = {
  data: PropTypes.object.isRequired
};

export default NutrientGroup;