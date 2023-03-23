/**
 * This function takes a tick string in the format 'YYYY-MM-DD' and returns the day of the month as a string, with leading zeros removed if any.
 * 
 * @param { string } tick - A string representing a tick in the format 'YYYY-MM-DD'.
 * @returns { string } - A string representing the day of the month with leading zeros removed if any.
 */
export const tickFormatter = tick => {
  const day = tick.split('-')[2];
  return day[0] === '0' ? day[1] : day;
};

/**
 * Renders the tooltip content for the BarChart
 * 
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
 * 
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