import { getVW } from '../../../utils';

/**
 * The dash pattern used for the CartesianGrid stroke
 * @type { Array<number> }
 */
export const strokeDasharray = [ getVW(1), getVW(1) ];

/**
 * The domain range for the calories YAxis
 * @type { Array<number | Function> }
 */
export const caloriesDomain = [ 0, dataMax => Math.round(dataMax + 25) ];

/**
 * The domain range for the kilogram YAxis
 * @type { Array<Function> }
 */
export const kilogramDomain = [ dataMin => Math.floor(dataMin - 1), dataMax => Math.round(dataMax + 1) ];

/**
 * The radius for the bars in the BarChart
 * @type { Array<number> }
 */
export const barRadius = [ getVW(3), getVW(3), 0, 0 ];

/**
 * The size of the bars in the BarChart
 * @type { number }
 */
export const barSize = getVW(7);

/**
 * Renders the tooltip content for the BarChart
 * @param { Object } param - The object containing the payload and active state
 * @param { Array<Object> } param.payload - The payload of the active point in the BarChart
 * @param { boolean } param.active - The active state of the tooltip
 * @return { JSX.Element|null } - The tooltip content or null
 */
export const renderTooltip = ({ payload, active }) => {
  return active && (
    <ul className="tooltip">
      { payload.map((entry, index) => <li key={ index }>{ entry.value + entry.unit }</li>) }
    </ul>
  );
};

/**
 * Renders the legend content for the BarChart
 * @param { Object } param - The object containing the payload
 * @param { Array<Object> } param.payload - The payload of the BarChart
 * @return { JSX.Element } - The legend content
 */
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