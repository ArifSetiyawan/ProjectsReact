import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create" style={{fontWeight:"bold"}}>New Project</NavLink>
        </li>
        <li>
          <span onClick={props.signOut} style={{fontWeight:"bold"}}><a>Log Out</a></span>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating blue" style={{fontWeight:"bold"}}>
            {props.profile.initials} 
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps) (SignedInLinks);