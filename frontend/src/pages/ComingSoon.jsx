import { Link } from 'react-router-dom';
import { Main } from '../components/Layout';

/**
 * React component for the "Coming Soon" page.
 *
 * @function
 * @name ComingSoon
 * @returns { JSX.Element } The rendered "Coming Soon" page.
 */
function ComingSoon() {
  return (
    <Main className="ComingSoon">
      <h2>Website is under construction</h2>

      <Link to="/">Retourner sur la page d'accueil</Link>
    </Main>
  );
}

export default ComingSoon;