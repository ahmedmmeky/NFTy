import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import styles from "./Create.module.scss";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
import NFTYButton from "../../components/NFTYButton";

const Create = () => {
  return (
    <div className={styles.create}>
      <h1>Create a New NFT</h1>
      <div className={styles.createForm}>
        {" "}
        <div className={styles.image}>
          <h4>Upload an Image</h4>
          <Input accept="image/*" id="upload-nft" multiple type="file" />
        </div>
        <div className={styles.form}>
          <FormControl>
            <div className={styles.inputContainer}>
              <h4>NFT Name</h4>
              <TextField label="Name" variant="outlined" />
            </div>
            <div className={styles.inputContainer}>
              <h4>Price ($100 USD Reccomended)</h4>
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
          <NFTYButton label="Create"></NFTYButton>
        </Link>
      </div>
    </div>
  );
};

export default Create;
