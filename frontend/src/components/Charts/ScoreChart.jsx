import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

function ScoreChart({ data, style }) {
  return (
    <div className="ScoreChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreChart;

ScoreChart.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object
};