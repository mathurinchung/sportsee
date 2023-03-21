/**
 * Array of tick labels for the x-axis
 * @type { Array<string> }
 */
const ticks = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D' ];

/**
 * Styles for the active dot in the chart
 * @type { Object }
 */
export const activeDot = { fill: '#fff', strokeWidth: '5px', stroke: 'rgba(255,255,255,.2)' };

/**
 * Event handler for the mouse move event on the chart
 * @type { Function }
 */
export const onMouseMove = () => {};

/**
 * Function to format the tick labels for the x-axis
 * @param { number } tick - The numeric value of the tick
 * @returns { string } - The formatted tick label
 */
export const tickFormatter = tick => ticks[tick - 1]

/**
 * Customized component to be rendered in the chart
 * @returns { JSX.Element } - The customized component
 */
export const Customized = () => {
  return (
    <>
      <text className="content">
        <tspan x="13%" y="17%">Durée moyenne des</tspan>
        <tspan x="13%" y="26%">sessions</tspan>
      </text>

      <defs>
        <linearGradient id="linearGradient" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="rgba(255, 255, 255, .4032)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
        </linearGradient>
      </defs>
    </>
  );
};

/**
 * Function to render the tooltip in the chart
 * @param { Object } payload - The payload object containing data for the tooltip
 * @returns { JSX.Element } - The rendered tooltip
 */
export const renderTooltip = ({ payload }) => {
  return (
    <ul className="tooltip">
      { payload.map((entry, index) => <li key={ index }>{ entry.value + entry.unit }</li>) }
    </ul>
  );
};