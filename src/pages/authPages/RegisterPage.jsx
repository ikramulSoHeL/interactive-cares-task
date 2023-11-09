import React from "react";
import "./auth.scss";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="auth__bg">
      <div className="content">
        <h3 className="auth__header">Register Form</h3>

        <form action="#" className="authForm">
          <div className="field">
            <span className="fa fa-user" />
            <input type="text" required placeholder="Username" />
          </div>

          <div className="field space">
            <span className="fa fa-envelope" />
            <input type="text" required placeholder="Email" />
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
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              required
              placeholder="Confirm Password"
            />
            <span className="show">SHOW</span>
          </div>

          <div className="pass">
            <span>Forgot Password?</span>
          </div>

          <div className="field space">
            <input type="submit" defaultValue="LOGIN" />
          </div>
        </form>

        <div className="login">Or signup with</div>

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
          Already have account?
          <Link to="/login" className="authPage__link">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
