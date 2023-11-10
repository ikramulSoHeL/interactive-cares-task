import React, { useState } from "react";
import "./auth.scss";
import { Link, useNavigate } from "react-router-dom";

// components
import { createToastMessage } from "../../utils/toastUtil";
import Toast from "../../components/toast/Toast";

//api service
import { registerUser } from "../../apis/auth.apis";
import { loadStorage } from "../../utils/persistLocalStorage";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState(null);

  const user = loadStorage("user");
  if (user) {
    navigate("/");
  }

  // toast
  const [position] = useState("top-right1");
  const [toastList, setToastList] = useState([]);

  const EMAIL_REGEX = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const USERNAME_REGEX = /^[a-zA-Z0-9_]*$/;
  const [registerInputs, setRegisterInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient",
  });
  const registerErrors = {
    username: "Username is required",
    email: "Email is required",
    password: "Password is required",
    confirmPassword: "Confirm Password is required",
  };

  const handleRegisterInputs = (name, e) => {
    setRegisterInputs({ ...registerInputs, [name]: e.target.value });
  };

  const registerValidation = () => {
    if (!registerInputs.username) {
      setServerErrors(registerErrors.username);
      return false;
    }
    if (!registerInputs.email) {
      setServerErrors(registerErrors.email);
      return false;
    }
    if (!registerInputs.password) {
      setServerErrors(registerErrors.password);
      return false;
    }
    if (!registerInputs.confirmPassword) {
      setServerErrors(registerErrors.confirmPassword);
      return false;
    }
    if (registerInputs.password !== registerInputs.confirmPassword) {
      setServerErrors("Passwords do not match");
      return false;
    }
    if (registerInputs.username.length < 3) {
      setServerErrors("Username must be at least 3 characters long");
      return false;
    }
    if (!EMAIL_REGEX.test(registerInputs.email)) {
      setServerErrors("Invalid email");
      return false;
    }
    if (registerInputs.password.length < 3) {
      setServerErrors("Password must be at least 3 characters long");
      return false;
    }
    if (!USERNAME_REGEX.test(registerInputs.username)) {
      setServerErrors("Invalid username");
      return false;
    }

    setServerErrors("");
    return true;
  };

  const handleRegister = () => {
    const isValid = registerValidation();

    if (isValid) {
      setLoading(true);
      setServerErrors(null);

      registerUser(registerInputs)
        .then((res) => {
          console.log(res);

          setLoading(false);
          setRegisterInputs({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          createToastMessage(
            "success",
            "Success",
            res.data.message,
            toastList,
            setToastList
          );

          setTimeout(() => {
            navigate("/login");
          }, 2000);
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
          setServerErrors(err.response.data.message);
        });
    }
  };

  return (
    <>
      <div className="auth__bg">
        <div className="content">
          <h3 className="auth__header">Register Form</h3>

          <form
            action="#"
            className="authForm"
            onSubmit={(e) => handleRegister(e)}
          >
            <div className="field">
              <span className="fa fa-user" />
              <input
                autoFocus
                type="text"
                required
                placeholder="Username"
                value={registerInputs.username}
                onChange={(e) => handleRegisterInputs("username", e)}
              />
            </div>

            <div className="field space">
              <span className="fa fa-envelope" />
              <input
                type="text"
                required
                placeholder="Email"
                value={registerInputs.email}
                onChange={(e) => handleRegisterInputs("email", e)}
              />
            </div>

            <div className="field space">
              <span className="fa fa-lock" />
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Password"
                value={registerInputs.password}
                onChange={(e) => handleRegisterInputs("password", e)}
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
                value={registerInputs.confirmPassword}
                onChange={(e) => handleRegisterInputs("confirmPassword", e)}
              />
              <span className="show">SHOW</span>
            </div>

            <div className="pass">
              <span>Forgot Password?</span>
            </div>

            <div className="authError">
              {serverErrors && (
                <span className="authError__message">{serverErrors}</span>
              )}
            </div>

            <div className="field space">
              <button type="submit">
                {loading ? (
                  <i className="fas fa-spinner fa-pulse" />
                ) : (
                  "REGISTER"
                )}
              </button>
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

      <Toast
        toastList={toastList}
        position={position}
        autoDelete={true}
        autoDeleteTime={666000}
      />
    </>
  );
};

export default RegisterPage;
