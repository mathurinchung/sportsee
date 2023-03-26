import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { activeDot, tickFormatter, renderTooltip, CustomCursor } from './CustomizedChart';
import { newArray } from '../../../utils';

/**
 * Renders a chart displaying the average session length over time.
 *
 * @param { Array } props.data - An array of data points for the chart.
 * @returns { JSX.Element } - The rendered component.
 */
function AverageChart({ data }) {
  const newData = newArray(data);

  return (
    <div className="Card AverageChart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ newData } margin={{ top: 75, bottom: 10 }}>
          <text className="content">
            <tspan x="13%" y="17%">Durée moyenne des</tspan>
            <tspan x="13%" y="26%">sessions</tspan>
          </text>

          <XAxis dataKey="day" className="xAxis" axisLine={ false } tickLine={ false } tickFormatter={ tickFormatter(newData) } />
          <YAxis dataKey="sessionLength" type="number" domain={[ -20, 'dataMax + 60' ]} hide />

          <Tooltip wrapperStyle={{ outline: "none" }} content={ renderTooltip } cursor={ <CustomCursor /> } />

          <defs>
            <linearGradient id="linearGradient" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, .4032)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>

          <Line dataKey="sessionLength" unit="min" type="natural" dot={ false } activeDot={ activeDot } stroke="url(#linearGradient)" strokeWidth={ 2 } />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Define the prop types for the component
AverageChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default AverageChart;