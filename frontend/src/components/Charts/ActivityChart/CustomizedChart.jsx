import { getVW } from '../../../utils';

export const strokeDasharray = [ getVW(1), getVW(1) ];
export const caloriesDomain = [ 0, dataMax => Math.round(dataMax + 25) ];
export const kilogramDomain = [ dataMin => Math.floor(dataMin - 1), dataMax => Math.round(dataMax + 1) ];
export const barRadius = [ getVW(3), getVW(3), 0, 0 ];
export const barSize = getVW(7);

export const renderTooltip = ({ payload, active }) => {
  return active && (
    <ul className="tooltip">
      { payload.map((entry, index) => <li key={ index }>{ entry.value + entry.unit }</li>) }
    </ul>
  );
};

export const renderLegend = ({ payload }) => {
  return (
    <div className="legend">
      <h3>Activité quotidienne</h3>

      <ul className="legend-list">
        { payload.map((entry, index) => <li key={ index } className="legend-item">{ entry.value }</li>) }
      </ul>
    </div>
  );
};