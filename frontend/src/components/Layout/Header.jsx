import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../assets/svg/logo.svg';

function Header() {
  const nav = [
    { to: '/', content: 'Accueil' },
    { to: '/profile', content: 'Profile' },
    { to: '/settings', content: 'Réglage' },
    { to: '/community', content: 'Communauté' }
  ];

  return (
    <header id="Header">
      <img src={ logo } className="App-logo" alt="logo" />

      <Nav>
        { nav.map((navlink, index) => <li key={ index }><NavLink to={ navlink.to }>{ navlink.content }</NavLink></li>) }
      </Nav>
    </header>
  );
}

export default Header;
