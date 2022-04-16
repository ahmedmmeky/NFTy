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
      name: "Lorem",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: true,
    },
    {
      id: 1,
      name: "Septum",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: false,
    },
    {
      id: 2,
      name: "Call",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: false,
    },
    {
      id: 3,
      name: "Random",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: false,
    },
    {
      id: 4,
      name: "Test",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: false,
    },
    {
      id: 5,
      name: "Fourth",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
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
                <Link to={{ pathname: `/${nft.id}` }} state={nft}>
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
