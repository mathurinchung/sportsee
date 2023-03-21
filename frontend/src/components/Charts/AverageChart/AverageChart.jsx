import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import { activeDot, Customized, renderTooltip, tickFormatter } from './CustomizedChart';

function AverageChart({ data }) {
  return (
    <div className="Card AverageChart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ data } onMouseMove={""}>
          <XAxis dataKey="day" className="xAxis" axisLine={ false } tickLine={ false } tickFormatter={ tickFormatter } />
          <YAxis dataKey="sessionLength" domain={[-15, 'dataMax + 150']} hide />
          <Tooltip content={ renderTooltip } />
          <Customized />
          <Line dataKey="sessionLength" unit="min" type="natural" dot={ false } activeDot={ activeDot } stroke="url(#linearGradient)" strokeWidth={ 2 } />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default AverageChart;