import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My Movie App</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
          <Link to="/health">Health</Link>

      </div>
    </nav>
  );
}

export default Navbar;