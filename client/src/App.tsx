import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks/redux.hooks';
import useAuthListener from './hooks/useAuthListener';
import LoginPage from './pages/LoginPage/LoginPage';
import AppLoader from './components/AppLoader/AppLoader';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  useAuthListener();
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);

  if (loading) return <AppLoader />;
  return (
    <div className="app">
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        {user && <Navbar />}
        <Routes>
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
