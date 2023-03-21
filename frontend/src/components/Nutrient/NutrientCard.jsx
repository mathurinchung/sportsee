import PropTypes from 'prop-types';
import { Icon } from '../Assets';

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

NutrientCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default NutrientCard;