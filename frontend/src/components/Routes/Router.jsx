import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Profile, ComingSoon } from '../../pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/profile/:userId" element={ <Profile /> } />
      <Route path="/settings" element={ <Navigate to="/coming" /> } />
      <Route path="/community" element={ <Navigate to="/coming" /> } />

      <Route path="/coming" element={ <ComingSoon /> } />

      <Route path="/notfound" element={ <h1>NotFound</h1> } />
      <Route path="*" element={ <Navigate to="/notfound" /> } />
    </Routes>
  );
}

export default Router;
