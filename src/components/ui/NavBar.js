import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, openModal } from "../../redux/loginSlice";
import { AccessModal } from "../login/AccessModal";

export const NavBar = () => {
  const logged = useSelector((state) => state.login.logged);
  const modal = useSelector((state) => state.login.modal);

  const dispatch = useDispatch();

  const handleClicked = () => {
    dispatch(openModal());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          RouterTemplate
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            {logged && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? "active" : "")
                  }
                  to="/prot01"
                >
                  Protected01
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? "active" : "")
                  }
                  to="/prot02"
                >
                  Protected02
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? "active" : "")
                  }
                  to="/profile"
                >
                  Profile
                </NavLink>
              </>
            )}
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/about"
            >
              About
            </NavLink>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
              <ul className="navbar-nav ml-auto">
                {modal ? (
                  !logged ? (
                    <>
                      <AccessModal />
                      <button
                        className="btn btn-secondary"
                        onClick={handleClicked}
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-secondary"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )
                ) : (
                  !logged ? (
                    <>
                      <button
                        className="btn btn-secondary"
                        onClick={handleClicked}
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-secondary"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
