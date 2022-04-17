import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createContext } from "react";
export const Context =createContext(null);
firebase.initializeApp({
    apiKey: "AIzaSyCNEqRZjrUWQcFxjCUpfqIUc0uDR-LbF9Y",
  authDomain: "chat-a3c69.firebaseapp.com",
  projectId: "chat-a3c69",
  storageBucket: "chat-a3c69.appspot.com",
  messagingSenderId: "643602384793",
  appId: "1:643602384793:web:68ec42d7556c214dbff508",
  measurementId: "G-VJMELN7JBF",
});
const auth = firebase.auth();
const db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
  value={
    {
      auth,
      db,
      firebase
    }
  }>
    <App />
  </Context.Provider>
);
