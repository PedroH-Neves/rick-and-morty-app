import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Details" element={<Details />} />
  </Routes>
);

export default App;
