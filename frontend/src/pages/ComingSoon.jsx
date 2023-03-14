import { Link } from 'react-router-dom';
import { Main } from '../components/Layout';

function ComingSoon() {
  return (
    <Main className="ComingSoon">
      <h2>Website is under construction</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </Main>
  );
}

export default ComingSoon;