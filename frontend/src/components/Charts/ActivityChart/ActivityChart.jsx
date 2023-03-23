import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { tickFormatter, renderTooltip, renderLegend } from './CustomizedChart';
/**
 * Renders a bar chart using the recharts library
 * 
 * @param { Object } props - The component props
 * @param { Array } props.data - An array of objects containing the data to be displayed on the chart
 * @return { JSX.Element } - The rendered chart
 */
function ActivityChart({ data }) {
  return (
    <div className="Card ActivityChart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ data } >
          <CartesianGrid vertical={ false } strokeDasharray={[ 1, 1 ]}/>
          <XAxis dataKey="day" className="xAxis" tickLine={ false } tickFormatter={ tickFormatter } interval="preserveStartEnd" stroke="#9b9eac" dy={ 14 } />
          <YAxis dataKey="kilogram" yAxisId="kilogram" domain={[ dataMin => Math.floor(dataMin - 1), dataMax => Math.round(dataMax + 1) ]} className="yAxis" axisLine={ false } tickLine={ false } interval={ 0 } allowDecimals={ false } orientation="right" stroke="#9b9eac" dx={ 31 } />
          <YAxis dataKey="calories" yAxisId="calories" domain={[ 0, dataMax => Math.round(dataMax + 25) ]} hide />
          <Tooltip wrapperStyle={{ outline: "none" }} content={ renderTooltip } />
          <Legend verticalAlign="top" content={ renderLegend } />
          <Bar dataKey="kilogram" unit="kg" yAxisId="kilogram" className="bar kilogram" name="Poids (kg)" barSize={ 7 } radius={[ 3, 3, 0, 0 ]} />
          <Bar dataKey="calories" unit="kCal" yAxisId="calories" className="bar calories" name="Calories brûlées (kCal)" barSize={ 7 } radius={[ 3, 3, 0, 0 ]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Define the prop types for the component
ActivityChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default ActivityChart;