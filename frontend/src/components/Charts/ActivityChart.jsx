import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

function ActivityChart() {
  return (
    <div className="ActivityChart">
      <h3>Activité quotidienne</h3>

      <ul className="ActivityLegend">
        <li className="LegendItem">Poids (kg)</li>
        <li className="LegendItem">Calories brûlées (kCal)</li>
      </ul>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data="">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#20253A" />
          <Bar dataKey="uv" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;
