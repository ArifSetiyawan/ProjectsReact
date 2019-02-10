import authReducers from '../reducers/authReducers'
import projectReducers from '../reducers/projectReducers'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const indexReducers = combineReducers ({
    auth: authReducers,
    project: projectReducers,
    firestore: firestoreReducer,
    firebase: firebaseReducer

});

export default indexReducers;