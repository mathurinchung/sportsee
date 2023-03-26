import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { tickFormatter } from './CustomizedChart';
import { reverseArray } from '../../../utils';

/**
 * PerformanceChart is a React component that displays a radar chart
 * using the Recharts library.
 *
 * @param { Array } props.data - An array of data to be displayed on the chart.
 * @returns { JSX.Element } A React JSX element that represents the PerformanceChart component.
 */
function PerformanceChart({ data }) {
  const reverseData = reverseArray(data);

  return (
    <div className="Card PerformanceChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={ reverseData } outerRadius="72.5%">
          <PolarGrid radialLines={ false } />
          <PolarAngleAxis dataKey="kind" tick={{ dy: 4 }} tickLine={ false } tickFormatter={ tickFormatter } />
          <PolarRadiusAxis axisLine={ false } tick={ false } tickCount={ 6 } domain={[ 0, 250 ]} />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={ 0.7 } />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// An array of data to be displayed on the chart.
PerformanceChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default PerformanceChart;