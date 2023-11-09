import React from "react";
import "./auth.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="auth__bg">
      <div className="content">
        <h3 className="auth__header">Login Form</h3>

        <form action="#" className="authForm">
          <div className="field">
            <span className="fa fa-user" />
            <input type="text" required placeholder="Email or Phone" />
          </div>

          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              required
              placeholder="Password"
            />
            <span className="show">SHOW</span>
          </div>

          <div className="field space">
            <input type="submit" defaultValue="LOGIN" />
          </div>
        </form>

        <div className="login">Or login with</div>

        <div className="links">
          <div className="facebook">
            <i className="fab fa-facebook-f">
              <span>Facebook</span>
            </i>
          </div>
          <div className="instagram">
            <i className="fab fa-instagram">
              <span>Instagram</span>
            </i>
          </div>
        </div>

        <div className="signup">
          Don't have account?
          <Link to="/register" className="authPage__link">
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
