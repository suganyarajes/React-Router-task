import { useNavigate, NavLink } from "react-router-dom";

export default function Navbar() {
  const navigator = useNavigate();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-6">
            <a className="navbar-brand" href="#">
              Sq<span style={{color:'red'}}>U</span>are
            </a>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-8">
                <ul className="nav">
                  <li className="nav-item">
                    <NavLink
                      to="/all"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "nav-link active"
                          : "nav-link"
                      }
                      aria-current="page"
                    >
                      ALL
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/fsd"
                      className={({ isActive, isPending }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                    >
                      FULLSTACK
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/db"
                      className={({ isActive, isPending }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                    >
                     DATABASE
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/fe"
                      className={({ isActive, isPending }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                    >
                     FRONTEND
                    </NavLink>
</li>

                  <li className="nav-item">
                    <NavLink
                      to="/be"
                      className={({ isActive, isPending }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                    >
                    BACKEND
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-4 d-grid gap-2 d-md-block">
                <button
                  type="button"
                  className="btn btn-outline-primary mx-2"
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
        </div>
      </div>
    </nav>
  );
}