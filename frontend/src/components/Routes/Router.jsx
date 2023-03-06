import { Routes, Route, Navigate } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <h1>Home</h1> } />
      <Route path="/profile/:userId" element={ <h1>Profile</h1> } />
      <Route path="/settings" element={ <h1>Settings</h1> } />
      <Route path="/community" element={ <h1>Community</h1> } />

      <Route path="/notfound" element={ <h1>NotFound</h1> } />
      <Route path="*" element={ <Navigate to="/notfound" /> } />
    </Routes>
  );
}

export default Router;
