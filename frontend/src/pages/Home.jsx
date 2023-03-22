import { Link } from 'react-router-dom';
import { Main } from '../components/Layout';
import logo from '../assets/svg/logo.svg';

/**
 * React component for the home page.
 *
 * @function
 * @name Home
 * @returns { JSX.Element } The rendered home page.
 */
function Home() {
  return (
    <Main className="Home">
      <img src={ logo } className="App-logo" alt="logo" />

      <ul>
        <li><Link to="/profile/10">Thomas (Mock)</Link></li>
        <li><Link to="/profile/12">Karl (API)</Link></li>
        <li><Link to="/profile/18">Cecilia (API)</Link></li>
      </ul>
    </Main>
  );
}

export default Home;
