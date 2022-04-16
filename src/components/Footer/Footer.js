import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>The NFTy Team</p>
      <p className={styles.footerText}>|</p>
      <p className={styles.footerText}>Copyright &copy; 2022</p>
      <p className={styles.footerText}>|</p>
      <p><a href="https://apache.org/licenses/LICENSE-2.0" className={styles.footerLink}>License</a></p>
    </div>
  );
};

export default Footer;
