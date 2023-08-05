import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import NavBar from './components/NavBar';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details" element={<Details />} />
    </Routes>
  </>
);

export default App;
