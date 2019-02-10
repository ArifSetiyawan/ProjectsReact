import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/signup" style={{fontWeight:"bold"}}>Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/signin" style={{fontWeight:"bold"}}>Sign in</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
