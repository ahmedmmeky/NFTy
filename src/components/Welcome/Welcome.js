import React from "react";
import Button from "@mui/material/Button";
import styles from "./Welcome.module.scss";
const Welcome = () => {
  return (
    <div>
      <div className={styles.logoAndButtons}>
        <div className={styles.logoContainer}>Logo</div>
        <div className={styles.buttonContainer}>
          <Button variant="contained">Login</Button>
          <Button variant="contained">Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
