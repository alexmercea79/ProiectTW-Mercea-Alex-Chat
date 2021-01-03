import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// firebase
const firebaseConfig = {
  apiKey: "AIzaSyA0uckAJsG8_OXpFQnulBeKHOOC2xTnRA4",
  authDomain: "tw-project-5a755.firebaseapp.com",
  projectId: "tw-project-5a755",
  storageBucket: "tw-project-5a755.appspot.com",
  messagingSenderId: "744149970665",
  appId: "1:744149970665:web:0d30e497cc545380ae0a78"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
