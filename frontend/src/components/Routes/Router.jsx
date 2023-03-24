import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Profile, ComingSoon, NotFound } from '../../pages';

/**
 * Renders the app's routing configuration using React Router
 * 
 * @return { JSX.Element } - The rendered router
 */
function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/user/:id" element={ <Profile /> } />
      <Route path="/settings" element={ <Navigate to="/coming" /> } />
      <Route path="/community" element={ <Navigate to="/coming" /> } />

      <Route path="/coming" element={ <ComingSoon /> } />

      <Route path="/notfound" element={ <NotFound /> } />
      <Route path="*" element={ <Navigate to="/notfound" /> } />
    </Routes>
  );
}

export default Router;
