import Nav from './Nav';
import { Icon } from '../Assets';

/**
 * A React functional component representing the sidebar section of the web application.
 * 
 * @function
 * @returns { JSX.Element } JSX element representing the sidebar section.
 */
function Sidebar() {
  return (
    <section className="Sidebar">
      <Nav>
        <li><Icon className="icon-sidebar icon-meditation" /></li>
        <li><Icon className="icon-sidebar icon-swimming" /></li>
        <li><Icon className="icon-sidebar icon-biking" /></li>
        <li><Icon className="icon-sidebar icon-dumbbell" /></li>
      </Nav>

      <p>Copyright, SportSee 2020</p>
    </section>
  );
}

export default Sidebar;
