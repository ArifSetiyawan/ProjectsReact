import React, { Component } from "react";
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projectActions';
import { Redirect } from 'react-router-dom'

class Createprojects extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/')
  };
  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to= '/signin'/>
    return (
      <div id="container-project">
        <form onSubmit={this.handleSubmit} className="white darken-1" style={{borderRadius:10}}>
          <h1>New Projects</h1>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="title" style={{fontWeight:"bold"}}>Project Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="content" style={{fontWeight:"bold"}}> Project Content</label>
              <textarea
                name="content"
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="input-field">
            <button className="btn" style={{fontWeight:"bold"}}>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Createprojects);
