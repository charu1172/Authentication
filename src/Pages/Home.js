import React, { useState } from "react";
import { useAuth } from "../context/context";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [check, setcheck] = useState("");
  const { logout } = useAuth();
  //   const history = useHistory();

  async function funclogout() {
    setcheck("");

    try {
      await logout();
      //   history.push("/login");
    } catch {
      setcheck("Failed to log out");
    }
  }

  return (
    <>
      <div className="main_cont">
        <div>
          <h2 className="header">Welcome!</h2>
          {check && <div>{check}</div>}
        </div>

        <div className="logout_cont">
          <Link to="/login">
            <div className="logout_link" onClick={funclogout}>Log Out</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
