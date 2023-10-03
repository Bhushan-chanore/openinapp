import React from "react";
import styles from "../css/PopupComponent.module.css";
import profileImage from "../icons/iconPerson.jpg"; 

const PopupComponent = ({ onClose }) => {
  return (
    <div className={styles["popup-container"]}>
        <div className={styles.popup}>
          <button className={styles["close-button"]} onClick={onClose}>
            &times;
          </button>
          <div className={styles["popup-header"]}>
            <img
              className={styles["profile-image"]}
              src={profileImage}
              alt="Profile"
            />
          </div>
          <ul className={styles["popup-options"]}>
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Schedules</li>
            <li>Users</li>
            <li>Settings</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
    </div>
  );
};

export default PopupComponent;
