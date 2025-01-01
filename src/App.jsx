import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
