import { Link } from 'react-router-dom';
import { Main } from '../components/Layout';

function Home() {
  const users = [
    { userId: 10, name: 'Thomas', location: 'Mock' },
    { userId: 12, name: 'Karl', location: 'API' },
    { userId: 18, name: 'Cecilia', location: 'API' }
  ];

  return (
    <Main className="Home">
      <ul>
        { users.map((user, index) => <li key={ index }><Link to={ `/profile/${ user.userId }` }>{user.name} ({user.location})</Link></li>) }
      </ul>
    </Main>
  );
}

export default Home;
