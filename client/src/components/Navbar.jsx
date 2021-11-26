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
              src="https://images.pexels.com/photos/9737563/pexels-photo-9737563.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="avatar"
            />
          </li>
          <li className="list-item">Fil Machado</li>
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
