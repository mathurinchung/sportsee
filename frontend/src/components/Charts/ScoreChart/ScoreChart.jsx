import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Customized } from './CustomizedChart';

/**
 * ScoreChart is a React component that displays a radial bar chart
 * using the Recharts library.
 * @param {Object} props - The component's props.
 * @param {Object} props.data - An object that contains a score property to be displayed on the chart.
 */
function ScoreChart({ data }) {
  return (
    <div className="Card ScoreChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="90%" startAngle={212} endAngle={-212} barSize={10} data={[ data ]}>
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar dataKey="score" cornerRadius="5" fill="#ff0000" />
          <Customized score={ data.score } />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * An object that contains a score property to be displayed on the chart.
 */
ScoreChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default ScoreChart;