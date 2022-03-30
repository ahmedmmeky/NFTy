import React from "react";
import Welcome from "../../components/Welcome";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Welcome />
    </div>
  );
};

export default LandingPage;
