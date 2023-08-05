import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav>
      <div>
        <h1 className="nav-title">AAAA</h1>
        <p className="nav-item"><NavLink to="/">Home</NavLink></p>
        <p className="nav-item"><NavLink to="Details">Details</NavLink></p>
      </div>
    </nav>
  </header>
);

export default NavBar;
