import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <h2>Logo</h2>
      </div>
      <div className={styles.headerNav}>
        <Link to="/explore">
          <h3>Explore</h3>
        </Link>

        <h3>Create</h3>
        <h3>Profile</h3>
        <h3>Wallet</h3>
      </div>
    </div>
  );
};

export default Header;
