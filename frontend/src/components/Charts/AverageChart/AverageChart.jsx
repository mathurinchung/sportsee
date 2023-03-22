import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import { activeDot, Customized, renderTooltip, tickFormatter } from './CustomizedChart';

/**
 * Renders a chart displaying the average session length over time.
 * 
 * @param { object } props - The component props.
 * @param { Array } props.data - An array of data points for the chart.
 * @returns { JSX.Element } - The rendered component.
 */
function AverageChart({ data }) {
  return (
    <div className="Card AverageChart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ data } onMouseMove={""}>
        <text className="content">
            <tspan x="13%" y="17%">Durée moyenne des</tspan>
            <tspan x="13%" y="26%">sessions</tspan>
          </text>

          <XAxis dataKey="day" className="xAxis" axisLine={ false } tickLine={ false } tickFormatter={ tickFormatter } />
          <YAxis dataKey="sessionLength" domain={[-15, 'dataMax + 150']} hide />
          <Tooltip content={ renderTooltip } />

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