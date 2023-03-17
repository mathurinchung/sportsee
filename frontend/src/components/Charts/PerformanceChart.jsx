import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function PerformanceChart({ data }) {
  const reverseData = array => array.slice(0).reverse();

  const kinds = [ 'Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité' ];
  const tickFormatter = kind => kinds.find((value,index) => index + 1 === kind);

  const axisDomain = ([dataMin, dataMax]) => {
    const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax));
    return [-absMax, absMax];
  };

  return (
    <div className="Card PerformanceChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="72%" data={ reverseData(data) }>
          <PolarGrid radialLines={false}  />
          <PolarAngleAxis dataKey="kind" tick={{ dy: 4, fill: '#fff', fontSize: 12, fontWeight: 500 }} tickLine={false} tickFormatter={ tickFormatter } />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
          <PolarRadiusAxis axisLine={false} tick={false} tickCount={6} domain={ axisDomain([ 0, 250 ]) } />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default PerformanceChart;