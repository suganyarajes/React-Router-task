import { useNavigate, NavLink } from "react-router-dom";

export default function Navbar() {
  const navigator = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sq<span style={{ color: "red" }}>U</span>are
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink
              exact
              to="/all"
              className="nav-link"
              activeClassName="active"
            >
              ALL
            </NavLink>
            <NavLink to="/fsd" className="nav-link" activeClassName="active">
              FULLSTACK
            </NavLink>
            <NavLink to="/db" className="nav-link" activeClassName="active">
              DATABASE
            </NavLink>
            <NavLink to="/fe" className="nav-link" activeClassName="active">
              FRONTEND
            </NavLink>
            <NavLink to="/be" className="nav-link" activeClassName="active">
              BACKEND
            </NavLink>
          </div>
          <div className="ms-lg-auto">
            <button
              type="button"
              className="btn btn-outline-primary me-2"
              onClick={() => navigator("/login")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigator("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
