import { Link } from 'react-router-dom';
import { Main } from '../components/Layout';

function Home() {
  return (
    <Main className="Home">
      <ul>
        <li><Link to="/profile/10">Thomas (Mock)</Link></li>
        <li><Link to="/profile/12">Karl (API)</Link></li>
        <li><Link to="/profile/18">Cecilia (API)</Link></li>
      </ul>
    </Main>
  );
}

export default Home;
