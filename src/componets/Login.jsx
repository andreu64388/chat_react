import { useContext } from "react";
import { Context } from "./../index";
import firebase from "firebase/compat/app";

const Login = () => {
  const { auth } = useContext(Context);
  const logins = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <div className="login">
      <button onClick={logins}> Login</button>
  
    </div>
  );
};

export default Login;
