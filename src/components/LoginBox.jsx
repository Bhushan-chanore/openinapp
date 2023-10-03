import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/login.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginBox = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    signInWithEmailAndPassword(auth, uname.value, pass.value)
      .then((userCredential) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email address </label>
          <input type="uname" name="uname" required />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className={styles.forgot}>
          <Link className={styles.link}>Forgot password?</Link>
        </div>
        <div className={styles.buttonContainer}>
          <input
            type="submit"
            className={styles.signInButton}
            value="Sign In"
          />
        </div>
      </form>
    </>
  );
};

export default LoginBox;
