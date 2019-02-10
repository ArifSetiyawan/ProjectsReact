import React, { Component } from "react";
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError , auth } = this.props;
    if (auth.uid) return <Redirect to= '/'/>
    return (
      <div id="container-login">
        <form onSubmit={this.handleSubmit} className="white darken-1">
          <h1>Sign in</h1>
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
            <button className="btn">SignIn</button>
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignIn);
