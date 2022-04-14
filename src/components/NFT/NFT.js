import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import styles from "./NFT.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const NFT = ({ name, price, description, imgUrl, expandedView = true }) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

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
    justifyContent: "center",
    gap: 32,
  };
  return (
    <>
      {!expandedView && (
        <Card sx={{ maxWidth: 345 }} className={styles.cardContainer}>
          <CardMedia
            component="img"
            width="140"
            image={imgUrl}
            alt="NFT image"
          />
          <CardContent className={styles.cardContent}>
            <div className={styles.nameContainer}>
              <h4>{name}</h4>
            </div>
            <div className={styles.priceContainer}>
              <h5>List Price</h5>
              <h5>${price}</h5>
            </div>
          </CardContent>
          <CardActions className={styles.cardActions}>
            <Button variant="contained" size="small" color="primary">
              Bid
            </Button>
            <FavoriteBorderIcon />
          </CardActions>
        </Card>
      )}
      {expandedView && (
        <div className={styles.expanded}>
          <div className={styles.imgContainer}>
            <img src={state.imgUrl}></img>
          </div>
          <div className={styles.info}>
            <h1>{state.name}</h1>
            <div className={styles.subInfo}>
              <h2>Copies for Sale:</h2>
              <h2>{state.copies}</h2>
            </div>
            <div className={styles.subInfo}>
              <h2>Current Bid:</h2>
              <h2>${state.price}</h2>
            </div>
            <div className={styles.subInfo}>
              <h2>About:</h2>
              <h2>{state.description}</h2>
            </div>
            <div className={styles.subInfo}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => setOpen(true)}
              >
                Place Bid
              </Button>
            </div>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.form}
          >
            <Box sx={style}></Box>
          </Modal>
        </div>
      )}
    </>
  );
};

export default NFT;
