import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Social Login</span>
      <ul className="list">
        <li className="list-item">
          <img
            className="avatar"
            src="https://images.pexels.com/photos/9737563/pexels-photo-9737563.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="avatar"
          />
        </li>
        <li className="list-item">Fil Machado</li>
        <li className="list-item">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
