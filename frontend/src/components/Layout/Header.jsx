import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../assets/svg/logo.svg';

function Header() {
  return (
    <header id="Header">
      <img src={logo} className="App-logo" alt="logo" />
      
      <Nav>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/profile">Profil</NavLink></li>
        <li><NavLink to="/settings">Réglage</NavLink></li>
        <li><NavLink to="/community">Communauté</NavLink></li>
      </Nav>
    </header>
  );
}

export default Header;
