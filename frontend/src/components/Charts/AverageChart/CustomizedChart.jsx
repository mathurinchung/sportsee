import { Rectangle } from 'recharts';

/**
 * Array of tick labels for the x-axis
 * 
 * @type { Array<string> }
 */
const ticks = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D' ];

/**
 * Styles for the active dot in the chart
 * 
 * @type { Object }
 */
export const activeDot = { fill: '#fff', strokeWidth: '10', strokeOpacity: '.2', r: 4 };

/**
 * Function to format the tick labels for the x-axis
 * 
 * @param { number } tick - The numeric value of the tick
 * @returns { string } - The formatted tick label
 */
export const tickFormatter = tick => ticks[tick - 1]


/**
 * Function to render the tooltip in the chart
 * 
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

/**
 * This function renders a custom cursor as a rectangle element using the given points, width and height.
 * 
 * @param { Object } props - An object containing the properties required to render the custom cursor.
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