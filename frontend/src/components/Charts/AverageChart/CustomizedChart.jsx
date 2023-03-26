import { Rectangle } from 'recharts';

/**
 * Array of tick labels for the x-axis
 *
 * @type { Array<string> }
 */
const ticks = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D' ];

/**
 * Returns a tick formatting function for a given data array.
 *
 * @param { Array } data - The data array to be formatted.
 * @returns { Function } A tick formatting function.
 */
export const tickFormatter = data => (tick, index) => (index === 0 || index === data.length - 1) ? '' : ticks[tick - 1];

/**
 * Function to render the tooltip in the chart
 *
 * @param { boolean } active - Whether the tooltip is active or not.
 * @param { Object } payload - The payload object containing data for the tooltip
 * @returns { JSX.Element } - The rendered tooltip
 */
export const renderTooltip = ({ active, payload }) => {
  if (active && payload[0].payload.type === 'fictional') return null;

  return active && (
    <ul className="tooltip">
    {
      payload.map((entry, index) => {
        return <li key={ index }>{ entry.value + entry.unit }</li>
      })
    }
    </ul>
  );
};

/**
 * This function renders a custom cursor as a rectangle element using the given points, width and height.
 *
 * @param { Array } props.points - An array of objects representing the points to position the cursor.
 * @param { number } props.width - The width of the cursor.
 * @param { number } props.height - The height of the cursor.
 */
export const CustomCursor = ({ points, width, height }) => {
  const { x, y } = points[0];

  return (
    <Rectangle x={ x } y={ y - 74 } width={ width } height={ height + 113 } fill="#000" opacity=".1" />
  );
};

/**
 * Renders a dot for a chart.
 * 
 * @param { Array } data - The data for the chart.
 * @returns { Function } A function that renders a dot for a specific data point.
 */
export const renderDot = data => {
  return ({ cx, cy, index }) => {
    if (index === 0 || index === data.length - 1) return null;

    return (
      <circle cx={ cx } cy={ cy } r={ 4 } fill="#fff" strokeWidth={ 10 } strokeOpacity={ .2 } />
    );
  };
};