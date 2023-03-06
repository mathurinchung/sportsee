import { Header } from './components/Layout';
import { Router } from './components/Routes';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
