import React, { useState } from "react";
import styles from "./Explore.module.scss";
import NFT from "../../components/NFT";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

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
};

const Explore = () => {
  const nfts = [
    {
      id: 0,
      name: "Artificial Intelligence",
      price: 7.50,
      description: "AI is getting smarter.",
      imgUrl:
        "https://i.ibb.co/WWtj5wy/ai.png",
      copies: 60,
      sell: false,
    },
    {
      id: 1,
      name: "Bigfoot",
      price: 1000,
      description: "The original man of the wilderness.",
      imgUrl:
        "https://i.ibb.co/K6m7Gj3/bigfoot.jpg",
      copies: 1,
      sell: false,
    },
    {
      id: 2,
      name: "Colorful Tubes",
      price: 2.50,
      description: "Who doesn't love science?",
      imgUrl:
        "https://i.ibb.co/DPdBJq5/colorful-tubes.jpg",
      copies: 100,
      sell: false,
    },
    {
      id: 3,
      name: "Connection",
      price: 7.50,
      description: "Technology is what brings us together.",
      imgUrl:
        "https://i.ibb.co/PMxrkzx/connected-together.jpg",
      copies: 850,
      sell: false,
    },
    {
      id: 4,
      name: "5G in the city",
      price: 5,
      description: "Accelerating innovation in an urban atmosphere.",
      imgUrl:
        "https://i.ibb.co/tQ1ZTLc/five-g.jpg",
      copies: 2000,
      sell: false,
    },
    {
      id: 5,
      name: "5G Tower",
      price: 10,
      description: "The pillars telecommuncation innovation.",
      imgUrl:
        "https://i.ibb.co/rcQ4J5g/five-g-tower.jpg",
      copies: 25,
      sell: false,
    },
    {
      id: 6,
      name: "Godzilla",
      price: 5000,
      description: "The one and only King of the Monsters.",
      imgUrl:
        "https://i.ibb.co/282RF8K/godzilla.jpg",
      copies: 1,
      sell: false,
    },
    {
      id: 7,
      name: "Grassy Fields",
      price: 4.50,
      description: "Springtime grass is a peaceful sight.",
      imgUrl:
        "https://i.ibb.co/wC6Gc7b/grassy-fields.jpg",
      copies: 1000,
      sell: false,
    },
    {
      id: 8,
      name: "Cottage in the Forest",
      price: 10,
      description: "Because Cabin in the Woods is a horror film.",
      imgUrl:
        "https://i.ibb.co/2hGcNN5/log-cabin.jpg",
      copies: 30,
      sell: false,
    },
    {
      id: 9,
      name: "Moon and Ocean",
      price: 12,
      description: "Water and night. A passionate combination.",
      imgUrl:
        "https://i.ibb.co/fXFRRMg/moon-on-the-horizon.jpg",
      copies: 90,
      sell: false,
    },
    {
      id: 10,
      name: "Rainy Day",
      price: 2,
      description: "Capture the peacefullness of water hitting the ground.",
      imgUrl:
        "https://i.ibb.co/ngypB08/rainy-day.jpg",
      copies: 5000,
      sell: false,
    },
    {
      id: 11,
      name: "Singularity",
      price: 2.50,
      description: "AI has become good as man.",
      imgUrl:
        "https://i.ibb.co/sWY2CJ4/singularity.jpg",
      copies: 100,
      sell: false,
    },
    {
      id: 12,
      name: "Snowy Day",
      price: 25,
      description: "It is April in central PA.",
      imgUrl:
        "https://i.ibb.co/F5smqM5/snowy-day.jpg",
      copies: 10,
      sell: false,
    },
    {
      id: 13,
      name: "Test Tubes",
      price: 1.50,
      description: "Science is what guides innovation.",
      imgUrl:
        "https://i.ibb.co/4ZRG47G/test-tubes.jpg",
      copies: 2000,
      sell: false,
    },
    {
      id: 14,
      name: "Wheat Fields",
      price: 1.50,
      description: "Nothing is as calm as the wheat fields.",
      imgUrl:
        "https://i.ibb.co/CBD1q8S/wheat-fields.jpg",
      copies: 2000,
      sell: false,
    },
  ];

  const [search, setSearch] = useState("");

  const [clickedNFT, setClickedNFT] = useState({});

  const updatedNFTs = nfts.filter((nft) =>
    nft.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={styles.exploreContainer}>
      <div className={styles.header}>
        <div className={styles.headerWithSwitch}>
          <div className={styles.textContainer}>
            <h2>NFTy Marketplace</h2>
            <h5>Popular Listings For You</h5>
          </div>
        </div>

        <TextField
          label="Search NFTs"
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchBar}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className={styles.nftsContainer}>
        {updatedNFTs.length !== 0 ? (
          updatedNFTs.map((nft) => {
            return (
              <div key={nft.id}>
                <Link
                  to={{ pathname: `/${nft.id}` }}
                  state={nft}
                  style={{ textDecoration: "none" }}
                >
                  <NFT
                    id={nft.id}
                    name={nft.name}
                    price={nft.price}
                    description={nft.description}
                    imgUrl={nft.imgUrl}
                    expandedView={false}
                    sell={nft.sell}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <div className="no-coins">
            <h2>No NFTs Were Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
