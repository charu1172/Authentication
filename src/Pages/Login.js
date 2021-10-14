import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { useAuth } from "../context/context.js";

const Login = () => {
  const email = useRef();
  const pwd = useRef();
  const [check, setcheck] = useState("");
  const { login } = useAuth();
  const [loading, setloading] = useState(false);
  const history = useHistory();

  async function handlesubmit(e) {
    e.preventDefault();

    try {
      setcheck("");
      setloading(true);
      await login(email.current.value, pwd.current.value);
      history.push("/");
    } catch {
      setcheck("Failed to login");
    }

    setloading(false);
  }

  return (
    <>
      <div className="signup-form-container">
        <form onSubmit={handlesubmit}>
          <h3 className="signup">LogIn</h3>
          {check && <div>{check}</div>}
          <label className="signup-label">Email</label>
          <br></br>
          <input type="email" ref={email} className="signup-input"></input>
          <br></br>
          <label className="signup-label">Password</label>
          <br></br>
          <input type="password" ref={pwd} className="signup-input"></input>
          <br></br>
          {/* <Link to="/login"> */}
          <button type="submit" className="signup-btn">
            LogIn
          </button>
          {/* </Link> */}
        </form>
        <div className="login_option">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
