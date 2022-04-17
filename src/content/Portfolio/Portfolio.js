import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import NFT from "../../components/NFT";
import Wallet from "../../components/Wallet";
import styles from "./Portfolio.module.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: 3,
            overflowY: "scroll",
            height: "100%",
            width: "calc(100vw - 200px)",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Portfolio = () => {
  const [search, setSearch] = useState("");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nfts = [
    {
      id: 0,
      name: "Colorful Space",
      price: 5,
      description: "Colorful planets make for a beautiful background.",
      imgUrl:
        "https://i.ibb.co/pf8nqkD/colorful-space.jpg",
      copies: 30,
      sell: true,
    },
    {
      id: 1,
      name: "Polka Dot Attack",
      price: 1,
      description: "Fly at hyperspeed through thousands of stars.",
      imgUrl:
        "https://i.ibb.co/WkGd0gz/crazy-colors.jpg",
      copies: 1000,
      sell: true,
    },
    {
      id: 2,
      name: "Dark Forest",
      price: 100,
      description: "Set some ambience for your upcoming horror film.",
      imgUrl:
        "https://i.ibb.co/0Mnfkv9/dark-forest.jpg",
      copies: 5,
      sell: true,
    },
    {
      id: 3,
      name: "Gen Z Doge",
      price: 20,
      description: "Your avatar expresses how you feel each morning.",
      imgUrl:
        "https://i.ibb.co/wLM44jr/doge-in-tie.jpg",
      copies: 5,
      sell: true,
    },
    {
      id: 4,
      name: "Millenial Doge",
      price: 20,
      description: "Your fit to buy avacado toast.",
      imgUrl:
        "https://i.ibb.co/f8rJHqK/doge-suit.jpg",
      copies: 5,
      sell: true,
    },
    {
      id: 5,
      name: "Fire Streaks",
      price: 15,
      description: "Fire but it's cool.",
      imgUrl:
        "https://i.ibb.co/zVFvvwd/fire-colors.jpg",
      copies: 3,
      sell: true,
    },
    {
      id: 6,
      name: "Mossy Rocks",
      price: 5,
      description: "Make your lock screen remind you of nature.",
      imgUrl:
        "https://i.ibb.co/LChjb2g/mossy-rocks.jpg",
      copies: 100,
      sell: true,
    },
    {
      id: 7,
      name: "Nyan Cat",
      price: 1000,
      description: "Troll your friends with boppy music.",
      imgUrl:
        "https://i.ibb.co/1T4mDVF/nyan-cat.png",
      copies: 2,
      sell: true,
    },
    {
      id: 8,
      name: "Planets Together",
      price: 5,
      description: "We're all in this together.",
      imgUrl:
        "https://i.ibb.co/Sy10B50/planets-all-together.jpg",
      copies: 20,
      sell: true,
    },
    {
      id: 9,
      name: "Vaporwave Doge",
      price: 2,
      description: "Doge hit the lean too hard.",
      imgUrl:
        "https://i.ibb.co/fMWnyDk/vaporwave-doge.jpg",
      copies: 100,
      sell: true,
    },
    {
      id: 10,
      name: "Galatic Vortex",
      price: 10,
      description: "The planets are getting SUCKED.",
      imgUrl:
        "https://i.ibb.co/6XJTB4G/vortex.jpg",
      copies: 100,
      sell: true,
    },
    {
      id: 11,
      name: "World Map",
      price: 10,
      description: "We are the world!",
      imgUrl:
        "https://i.ibb.co/fCQBn3k/world-map.jpg",
      copies: 10000,
      sell: true,
    },
  ];

  const updatedNFTs = nfts.filter((nft) =>
    nft.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      className={styles.mainBox}
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          maxWidth: "150px",
          minWidth: "150px",
        }}
      >
        <Tab label="Owned NFTs" {...a11yProps(0)} className={styles.tab} />
        <Tab label="Wallets" {...a11yProps(1)} className={styles.tab} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <h1 className={styles.ownedNFTTitle}>Current Collection</h1>
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
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Wallet />
      </TabPanel>
    </Box>
  );
};

export default Portfolio;
