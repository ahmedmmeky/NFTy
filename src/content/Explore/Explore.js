import React from "react";
import styles from "./Explore.module.scss";
import NFT from "../../components/NFT";
const Explore = () => {
  return (
    <div className={styles.exploreContainer}>
      <div className={styles.header}>
        <h2>NFTy Marketplace</h2>
        <h5>Popular Listings For You</h5>
      </div>
      <div className={styles.nftsContainer}>
        <NFT />
        <NFT />
        <NFT />
        <NFT />
        <NFT />
        <NFT />
      </div>
    </div>
  );
};

export default Explore;
