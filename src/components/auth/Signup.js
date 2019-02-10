import React, { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../redux/actions/authActions'

class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth , authError } = this.props;
    if (auth.uid) return <Redirect to= '/'/>
    return (
      <div id="container-login">
        <form onSubmit={this.handleSubmit} className="white darken-3">
          <h1>Sign up</h1>
          <div className="row">
            <div className="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <label htmlFor="firstName" style={{fontWeight:"bold"}}>First Name</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field col s6">
              <label htmlFor="lastName" style={{fontWeight:"bold"}}>Last Name</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i class="material-icons prefix">mail</i>
              <label htmlFor="email" style={{fontWeight:"bold"}}>Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i class="material-icons prefix">https</i>
              <label htmlFor="password" style={{fontWeight:"bold"}}>Password</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="input-field">
            <button className="btn" style={{fontWeight:"bold"}}>SignUp</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Signup);