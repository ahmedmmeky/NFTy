import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/brand/nfty_logo_blue.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link to="/explore">
          <img alt="NFTy logo" className={styles.headerImage} src={logo} />
        </Link>
      </div>
      <div className={styles.headerNav}>
        <Link to="/explore" className={styles.link}>
          <h3>Home</h3>
        </Link>
        <Link to="/create" className={styles.link}>
          <h3>Create</h3>
        </Link>
        <Link to="/portfolio" className={styles.link}>
          <h3>Portfolio</h3>
        </Link>
        <Link to="/learn" className={styles.link}>
          <h3>Learn</h3>
        </Link>
        <Link to="/chat" className={styles.link}>
          <h3>Chat</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
