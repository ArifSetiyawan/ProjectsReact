import React from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect  } from 'react-router-dom'
import moment from 'moment'

const Projectsdetails = props => {
  const { project , auth } = props;
  if (!auth.uid) return <Redirect to= '/signin'/>
  if (project){
    return (
    <div className="container section project-detail">
      <div className="card z-depth-0" style={{width:'60%',borderRadius:10}}>
        <div className="card-content">
          <span className="card-title" style={{fontWeight:"bold"}}>{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text " style={{borderRadius:10}}>
          <p> Posted by {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div className="container center">
          <p>Loading .....</p>
      </div>
    )
  }
  
};

const mapStateToProps = (state , ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
) (Projectsdetails)
