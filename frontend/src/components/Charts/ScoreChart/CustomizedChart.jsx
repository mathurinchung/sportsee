export const Customized = ({ score }) => {
  return (
    <>
      <text className="title" x="0" y="7%">Score</text>

      <circle cx="50%" cy="50%" r="40%" fill="#fff"></circle>

      <text className="content">
        <tspan className="percent" x="38.5%" y="49%">{ `${ score * 100 }%` }</tspan>
        <tspan x="36%" y="62%">de votre</tspan>
        <tspan x="37%" y="74%">objectif</tspan>
      </text>
    </>
  );
};