/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar({ title, mode, toggleMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckCheckedDisabled"
                onChange={toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckCheckedDisabled"
              >
                {mode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.protoTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
