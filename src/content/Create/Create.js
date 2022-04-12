import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import styles from "./Create.module.scss";

const Create = () => {
  return (
    <div className={styles.create}>
      <h3>Create a New NFT</h3>
      <div className={styles.createForm}>
        {" "}
        <div className={styles.image}>
          <img src="" alt="" />
        </div>
        <div className={styles.form}>
          <FormControl>
            <div className={styles.inputContainer}>
              <h4>NFT Name</h4>
              <TextField label="Name" variant="outlined" />
            </div>
            <div className={styles.inputContainer}>
              <h4>Price</h4>
              <TextField label="Price USD" variant="outlined" />
            </div>
            <div className={styles.inputContainer}>
              <h4>Description</h4>
              <TextField label="Description" variant="outlined" />
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Create;
