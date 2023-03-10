import PropTypes from 'prop-types';
import { Icon } from '../Assets';

function NutrientCard({ className, icon, data, type }) {
  return (
    <div className={ `NutrientCard ${ className }` }>
      <div className="icon-nutrient">
        <Icon className={ `icon-${ icon }` } />
      </div>

      <div className="info-nutrient">
        <span className="data-nutrient">{ data }</span>
        <span className="type-nutrient">{ type }</span>
      </div>
    </div>
  );
}

export default NutrientCard;

NutrientCard.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  data: PropTypes.string,
  type: PropTypes.string
}