import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function AverageChart({ data }) {
  const days = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D' ];
  const tickFormatter = day => days.find((value,index) => index + 1 === day);

  return (
    <div className="Card AverageChart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ data }>
          <XAxis dataKey="day" tickFormatter={ tickFormatter } />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" dot={false} stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default AverageChart;