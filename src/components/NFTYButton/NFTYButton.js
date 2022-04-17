import React from "react";
import styles from "./NFTYButton.module.scss";

const NFTYButton = ({ sell, ...buttonProps }) => {
  return (
    <div>
      {" "}
      <button className={styles.btn} {...buttonProps}>
        {sell ? "List For Sale" : "Place Bid"}
      </button>
    </div>
  );
};

export default NFTYButton;
