import React from "react";
import styles from "./NFTYButton.module.scss";

const NFTYButton = ({ width, label, ...buttonProps }) => {
  return (
    <div>
      {" "}
      {width === undefined && (
        <button className={styles.btn} {...buttonProps}>
          {label}
        </button>
      )}
      {width !== undefined && (
        <button
          className={styles.btn}
          {...buttonProps}
          styles={{ width: width }}
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default NFTYButton;
