import Nav from './Nav';
import { Icon } from './Assets';

function Sidebar() {
  return (
    <section>
      <Nav>
        <li><Icon className="icon-sidebar icon-meditation" /></li>
        <li><Icon className="icon-sidebar icon-swimming" /></li>
        <li><Icon className="icon-sidebar icon-biking" /></li>
        <li><Icon className="icon-sidebar icon-dumbbell" /></li>
      </Nav>
    </section>
  );
}

export default Sidebar;
