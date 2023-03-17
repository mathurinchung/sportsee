import Nav from './Nav';
import { Icon } from '../Assets';

function Sidebar() {
  const activities = [ 'meditation', 'swimming', 'biking', 'dumbbell' ];

  return (
    <section className="Sidebar">
      <Nav>
        { activities.map((activity, index) => <li key={ index }><Icon className={`icon-sidebar icon-${activity}`} /></li>) }
      </Nav>

      <p>Copyright, SportSee 2020</p>
    </section>
  );
}

export default Sidebar;
