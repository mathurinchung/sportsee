import PropTypes from 'prop-types';
import { Icon } from '../Assets';
import { formatNumber } from '../../utils';
import { useNutrientState } from '../../hooks';

function NutrientCard({ data }) {
  const { nutrient, isLoading } = useNutrientState(data);

  return !isLoading && (
    <div className={ `Card NutrientCard ${ nutrient.icon }` }>
      <div className="icon-nutrient">
        <Icon className={ `icon-${ nutrient.icon }` } />
      </div>

      <div className="info-nutrient">
        <span className="data-nutrient">{ formatNumber(data.value) + nutrient.unit }</span>
        <span className="type-nutrient">{ nutrient.type }</span>
      </div>
    </div>
  );
}

NutrientCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default NutrientCard;