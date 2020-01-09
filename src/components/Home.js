import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <div className="bg">
      <div className="container">
        <div className="links">
          <p>Who are you?</p>
          <div className="split">
            <Link to="/ulogin">
              <p>User</p>
            </Link>
            <Link to="/flogin">
              <p>Farmer</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
