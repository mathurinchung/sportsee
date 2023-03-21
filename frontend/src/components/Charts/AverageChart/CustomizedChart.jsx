const ticks = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D' ];

export const activeDot = { fill: '#fff', strokeWidth: '5px', stroke: 'rgba(255,255,255,.2)' };

export const onMouseMove = () => {};

export const tickFormatter = tick => ticks[tick - 1]

export const Customized = () => {
  return (
    <>
      <text className="content">
        <tspan x="13%" y="17%">Durée moyenne des</tspan>
        <tspan x="13%" y="26%">sessions</tspan>
      </text>

      <defs>
        <linearGradient id="linearGradient" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="rgba(255, 255, 255, .4032)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
        </linearGradient>
      </defs>
    </>
  );
};

export const renderTooltip = ({ payload }) => {
  return (
    <ul className="tooltip">
      { payload.map((entry, index) => <li key={ index }>{ entry.value + entry.unit }</li>) }
    </ul>
  );
};