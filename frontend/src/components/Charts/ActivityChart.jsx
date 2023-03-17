import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

function ActivityChart({ data }) {
  return (
    <div className="Card ActivityChart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ data } >
          <CartesianGrid />
          <XAxis dataKey="day" />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend verticalAlign="top" align="right" iconType="circle" iconSize="8" />
          <Bar name="Poids (kg)" dataKey="kilogram" fill="#282d30" />
          <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#e60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default ActivityChart;