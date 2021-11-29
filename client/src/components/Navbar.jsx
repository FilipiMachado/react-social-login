import React from "react";
// React Router
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self")
  }

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Social Login
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="list-item">
            <img
              className="avatar"
              src={user.photos[0].value}
              alt="avatar"
            />
          </li>
          <li className="list-item">{user.displayName}</li>
          <li className="list-item" onClick={logout}>Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
