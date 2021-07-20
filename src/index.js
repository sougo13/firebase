import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyCE92R9_yyKSB5ge2rg7jPQ91JomT6VraM",
  authDomain: "test-2f538.firebaseapp.com",
  projectId: "test-2f538",
  storageBucket: "test-2f538.appspot.com",
  messagingSenderId: "734799808138",
  appId: "1:734799808138:web:b60067ff16a2fc873fcf73",
  measurementId: "G-4ZDRYR8NJM"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
