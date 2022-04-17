import React from "react";
import styles from "./NFTYButton.module.scss";

const NFTYButton = ({ label, ...buttonProps }) => {
  return (
    <div>
      {" "}
      <button className={styles.btn} {...buttonProps}>
        {label}
      </button>
    </div>
  );
};

export default NFTYButton;
