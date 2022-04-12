import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Create.module.scss";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div className={styles.create}>
      <h3>Create a New NFT</h3>
      <div className={styles.createForm}>
        {" "}
        <div className={styles.image}>
          <h4>Upload an Image</h4>
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
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
      <div className={styles.buttonContainer}>
        <Link to="/explore">
          <Button variant="contained">Create NFT</Button>
        </Link>
      </div>
    </div>
  );
};

export default Create;
