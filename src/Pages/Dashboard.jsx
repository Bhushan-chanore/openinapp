import React, { useState } from "react";
import styles from "../css/homepage.module.css";
import DashboardIcon from "../icons/iconBoard.js";
import ScheduleIcon from "../icons/iconSchedule.js";
import SettingsIcon from "../icons/iconSetting.js";
import UserIcon from "../icons/iconPerson.js";
import TransactionIcon from "../icons/iconsTransaction.js";
import HomeFeatures from "../components/RightDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PopupComponent from "../components/Popup";

const Homepage = () => {
  const Board = () => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
    return (
      <>
        {showPopup && <PopupComponent onClose={togglePopup} />}
        <div className={`d-flex flex-column ${styles.boardhome}`}>
          <div
            className={`d-flex flex-column ${styles.w100} ${styles.h70} ${styles.hidden}`}
          >
            <span className={styles.boardhead}>Board.</span>
            <div className={`d-flex flex-column`}>
              <span className={`${styles.boardlist} ${styles.fw700}`}>
                <DashboardIcon />
                Dashboard
              </span>
              <span className={styles.boardlist}>
                <TransactionIcon /> Transactions
              </span>
              <span className={styles.boardlist}>
                <ScheduleIcon /> Schedules
              </span>
              <span className={styles.boardlist}>
                <UserIcon /> Users
              </span>
              <span className={styles.boardlist}>
                <SettingsIcon /> Settings
              </span>
            </div>
          </div>
          <div
            className={`d-flex flex-column justify-content-end ${styles.h30} ${styles.hidden}`}
          >
            <span className={styles.boardbottom}>Help</span>
            <span className={styles.boardbottom}>Contact us</span>
          </div>
          <div className={`${styles.w100} ${styles.h70} ${styles.mobilehead}`}>
            <span
              className={`${styles.spanBars} ${styles.boardhead}`}
              onClick={togglePopup}
            >
              <FontAwesomeIcon
                className={styles.bars}
                icon={faBars}
                style={{ color: "#ffffff" }}
              />
            </span>
            <span className={styles.boardhead} style={{ width: "80%" }}>
              Board.
            </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={`d-flex ${styles.home}`}>
        <Board />
        <HomeFeatures />
      </div>
    </>
  );
};

export default Homepage;
