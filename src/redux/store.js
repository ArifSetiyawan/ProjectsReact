import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import { reactReduxFirebase , getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebaseConfig from '../config/firebaseConfig';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebaseConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(firebaseConfig)
  )
);

export default store;