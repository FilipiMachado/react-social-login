import React from "react";
// Icons
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import Google from "../img/google.png";

const Login = () => {
  return (
    <div className="login">
      <h1 className="login-title">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="login-button facebook">
            <img className="icon" src={Facebook} alt="facebook icon" />
            Facebook
          </div>
          <div className="login-button github">
            <img className="icon" src={Github} alt="github icon" />
            Github
          </div>
          <div className="login-button google">
            <img className="icon" src={Google} alt="google icon" />
            Google
          </div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
