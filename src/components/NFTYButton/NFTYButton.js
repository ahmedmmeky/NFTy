import React from "react";
import styles from "./NFTYButton.module.scss";

const NFTYButton = ({ butonText, ...buttonProps }) => {
  return (
    <div>
      {" "}
      <button className={styles.btn} {...buttonProps}>
        {buttonText}
      </button>
    </div>
  );
};

export default NFTYButton;
