
import React, { useContext } from "react";

import { Link } from "react-router-dom";


const Header = () => {
 
  return (
    <nav className="header">
      <div>
        <h2>Todo App.</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {/* {isAuthenticated ? (
          <button disabled={loading} onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
        )} */}
        <Link to={"/login"}>Login</Link>
      </article>
    </nav>
  );
};

export default Header;