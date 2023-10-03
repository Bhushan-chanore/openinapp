import React from "react";
import styles from "../css/loginBtn.module.css";
import InitializeApp from "../firebase/firebaseconfig.js";
import { getAuth } from "firebase/auth";
import Google from "../icons/iconGoogle";
import Apple from "../icons/iconApple";
import { signInWithPopup, OAuthProvider } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";
import { useNavigate } from "react-router";

const AccountLogin = () => {
  const navigate = useNavigate();
  const auth = getAuth(InitializeApp);
  const provider = new OAuthProvider("apple.com");
  const googleprovider = new GoogleAuthProvider();
  return (
    <div className={styles.main}>
      <button
        style={{ marginTop: 0 }}
        onClick={async () => {
          await signInWithPopup(auth, googleprovider)
            .then((result) => {
              navigate("/dashboard");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        className={styles.btn}
      >
        <div className={styles.container}>
        
            <Google/>
     
          <div className={styles.info}>Sign in with Google</div>
        </div>
      </button>
      <button
        onClick={async () => {
          await signInWithPopup(auth, provider)
            .then((result) => {
              navigate("/dashboard");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        className={styles.btn}
      >
        <div className={styles.container}>
        
            <Apple/>
          
          <div className={styles.info}>Sign in with Apple</div>
        </div>
      </button>
    </div>
  );
};

export default AccountLogin;

