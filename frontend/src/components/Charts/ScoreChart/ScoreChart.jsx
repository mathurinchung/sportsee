import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Customized } from './CustomizedChart';

function ScoreChart({ data }) {
  return (
    <div className="Card ScoreChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="90%" startAngle={212} endAngle={-212} barSize={10} data={[ data ]}>
          <Customized score={ data.score } />
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar dataKey="score" cornerRadius="5" fill="#ff0000" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

ScoreChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default ScoreChart;