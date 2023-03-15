import { Header } from './components/Layout';
import { Router } from './components/Routes';
import './assets/sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;