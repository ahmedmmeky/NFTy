import React, { useState } from "react";
import styles from "./Explore.module.scss";
import NFT from "../../components/NFT";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import Switch from "../../components/Switch";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
    },
    {
      id: 1,
      name: "Septum",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 2,
      name: "Call",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 3,
      name: "Random",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 4,
      name: "Test",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 5,
      name: "Fourth",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
  ];

  const [search, setSearch] = useState("");
  const [listView, setListView] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickedNFT, setClickedNFT] = useState({});
  const handleOpen = (nft) => {
    setOpen(true);
    setClickedNFT(nft);
  };
  const handleClose = () => setOpen(false);

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
          <div className={styles.switchContainer}>
            <h5>List View</h5>
            <div className={styles.switch}>
              <Switch
                isOn={listView}
                handleToggle={() => setListView(!listView)}
                onColor="#06D6A0"
              />
            </div>
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
      {!listView && (
        <div className={styles.nftsContainer}>
          {updatedNFTs.length !== 0 ? (
            updatedNFTs.map((nft) => {
              return (
                <div key={nft.id}>
                  <NFT
                    id={nft.id}
                    name={nft.name}
                    price={nft.price}
                    description={nft.description}
                    imgUrl={nft.imgUrl}
                  />
                </div>
              );
            })
          ) : (
            <div className="no-coins">
              <h2>No NFTs Were Found</h2>
            </div>
          )}
        </div>
      )}

      {listView && (
        <div className={styles.listNftsContainer}>
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2} className={styles.stack}>
              {updatedNFTs.length !== 0 ? (
                updatedNFTs.map((nft) => {
                  return (
                    <div
                      key={nft.id}
                      className={styles.listNft}
                      onClick={() => handleOpen(nft)}
                    >
                      <div className={styles.imgName}>
                        <img src={nft.imgUrl} alt="NFT Image" />
                        <h4>{nft.name}</h4>
                      </div>
                      <h4>${nft.price}</h4>
                    </div>
                  );
                })
              ) : (
                <div className="no-coins">
                  <h2>No NFTs Were Found</h2>
                </div>
              )}
            </Stack>
          </Box>
          <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <NFT
                  id={clickedNFT.id}
                  name={clickedNFT.name}
                  price={clickedNFT.price}
                  description={clickedNFT.description}
                  imgUrl={clickedNFT.imgUrl}
                  expandedView={true}
                />
              </Box>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
