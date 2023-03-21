import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { reverseData, tickFormatter } from './CustomizedChart';

function PerformanceChart({ data }) {
  return (
    <div className="Card PerformanceChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={ reverseData(data) } outerRadius="72.5%">
          <PolarGrid radialLines={ false } />
          <PolarAngleAxis dataKey="kind" tick={{ dy: 4 }} tickLine={ false } tickFormatter={ tickFormatter } />
          <PolarRadiusAxis axisLine={ false } tick={ false } tickCount={ 6 } domain={[ 0, 250 ]} />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={ 0.7 } />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default PerformanceChart;