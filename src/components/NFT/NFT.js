import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import styles from "./NFT.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NFT = ({ name, price, description, imgUrl, expandedView = true }) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
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
              <Button variant="contained" size="small" color="primary">
                Place Bid
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NFT;
