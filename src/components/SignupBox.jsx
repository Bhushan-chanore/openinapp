import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/login.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpBox = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    createUserWithEmailAndPassword(auth, uname.value, pass.value)
      .then((userCredential) => {
        navigate("/");
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
        <div className={styles.buttonContainer}>
          <input
            type="submit"
            className={styles.signInButton}
            value="Sign Up"
          />
        </div>
        
      </form>
      <span className={styles.register}>
          have an account?
          <Link to="/" className={styles.link}>
            Sign In
          </Link>
        </span>
    </>
  );
};

export default SignUpBox;
