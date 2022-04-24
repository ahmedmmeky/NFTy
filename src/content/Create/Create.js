import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import styles from "./Create.module.scss";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
import NFTYButton from "../../components/NFTYButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const Create = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
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
        <NFTYButton label="Create" onClick={() => setOpen(true)}></NFTYButton>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box sx={style}>
          <div className={styles.success}>
            <CloseIcon className={styles.closeTwo} onClick={handleClose} />
            <h1>Success!</h1>
            <p>We are reviewing this NFT for copyright issues!</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Create;
