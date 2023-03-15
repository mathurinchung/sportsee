import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function ScoreChart({ data }) {
  return (
    <div className="Card ScoreChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="90%" startAngle={212} endAngle={-212} barSize={10} data={[ data ]}>
          <text className="title" x="0" y="7%">Score</text>
          <circle cx="50%" cy="50%" r="80" fill="#fff"></circle>
          <text className="content">
            <tspan className="percent" x="38.5%" y="49%">{ `${ data.score * 100 }%` }</tspan>
            <tspan x="36%" y="62%">de votre</tspan>
            <tspan x="37%" y="74%">objectif</tspan>
          </text>
          <RadialBar dataKey="score" cornerRadius="5" fill="#ff0000" />
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

ScoreChart.propTypes = {
  data: PropTypes.object
};

export default ScoreChart;