import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import signupstyles from "./signup.module.css";
import "./signup.css";
import { useAuth } from "../context/context.js";

const Signup = () => {
  const email = useRef();
  const pwd = useRef();
  const pwdconf = useRef();
  const [check, setcheck] = useState("");
  const { signup, curuser } = useAuth();
  const [loading, setloading] = useState(false);

  async function handlesubmit(e) {
    e.preventDefault();

    if (pwd.current.value !== pwdconf.current.value) {
      return setcheck("Passwords do not match");
    }

    try {
      setcheck("");
      setloading(true);
      await signup(email.current.value, pwd.current.value);
      //   history.push("/");
    } catch {
      setcheck("Failed to signup");
    }

    setloading(false);
  }

  return (
    <>
      <div className="signup-form-container">
        <form onSubmit={handlesubmit}>
          <h3 className="signup">Signup</h3>
          {check && <div className="check">{check}</div>}
          <label className="signup-label">Email</label>
          <br></br>
          <input type="email" ref={email} className="signup-input"></input>
          <br></br>
          <label className="signup-label">Password</label>
          <br></br>
          <input type="password" ref={pwd} className="signup-input"></input>
          <br></br>
          <label className="signup-label">Password Confirmation</label>
          <br></br>
          <input type="password" ref={pwdconf} className="signup-input"></input>
          <br></br>
          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
        <div className="login_option">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
