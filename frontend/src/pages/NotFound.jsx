import { Link } from 'react-router-dom';
import { Main } from '../components/Layout';

function NotFound() {
  return (
    <Main className="NotFound">
      <h2 className="errorCode">404</h2>

      <p className="errorMsg">Oups! La page que vous demandez n'existe pas.</p>

      <Link to="/">Retourner sur la page d'accueil</Link>
    </Main>
  );
}

export default NotFound;
