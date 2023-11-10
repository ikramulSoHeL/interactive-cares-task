import React, { useState } from "react";
import "./auth.scss";
import { Link, useNavigate } from "react-router-dom";

// components
import { createToastMessage } from "../../utils/toastUtil";

// api service
import { loginUser } from "../../apis/auth.apis";
import { saveStorage } from "../../utils/persistLocalStorage";
import { loadStorage } from "../../utils/persistLocalStorage";
import Toast from "../../components/toast/Toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState(null);

  const [position] = useState("top-right1");
  const [toastList, setToastList] = useState([]);

  const user = loadStorage("user");
  if (user) {
    navigate("/");
  }

  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });
  const loginErrors = {
    username: "Username is required",
    password: "Password is required",
  };

  const handleLoginInputs = (name, e) => {
    setLoginInputs({ ...loginInputs, [name]: e.target.value });
  };

  const loginValidation = () => {
    if (!loginInputs.username) {
      setServerErrors(loginErrors.username);
      return false;
    }
    if (!loginInputs.password) {
      setServerErrors(loginErrors.password);
      return false;
    }

    setServerErrors("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = loginValidation();

    if (isValid) {
      setLoading(true);
      setServerErrors(null);

      loginUser(loginInputs)
        .then((res) => {
          console.log(res);

          createToastMessage(
            "success",
            "Success",
            res.data.message,
            toastList,
            setToastList
          );
          setLoading(false);
          saveStorage("user", res.data.data.user);
          saveStorage("accessToken", res.data.data.accessToken);
          saveStorage("refreshToken", res.data.data.refreshToken);

          setLoginInputs({ username: "", password: "" });

          setTimeout(() => {
            navigate("/");
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
          <h3 className="auth__header">Login Form</h3>

          <form
            action="#"
            className="authForm"
            onSubmit={(e) => handleLogin(e)}
          >
            <div className="field">
              <span className="fa fa-user" />
              <input
                autoFocus
                type="text"
                required
                placeholder="Email or Phone"
                value={loginInputs.username}
                onChange={(e) => handleLoginInputs("username", e)}
              />
            </div>

            <div className="field space">
              <span className="fa fa-lock" />
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Password"
                value={loginInputs.password}
                onChange={(e) => handleLoginInputs("password", e)}
              />
              <span className="show">SHOW</span>
            </div>

            <div className="authError space">
              {serverErrors && (
                <span className="authError__message">{serverErrors}</span>
              )}
            </div>

            <div className="field space">
              <button type="submit">
                {loading ? <i className="fas fa-spinner fa-pulse" /> : "LOGIN"}
              </button>
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

      <Toast
        toastList={toastList}
        position={position}
        autoDelete={true}
        autoDeleteTime={2000}
      />
    </>
  );
};

export default LoginPage;
